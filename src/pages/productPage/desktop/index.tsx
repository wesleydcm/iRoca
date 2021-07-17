import { Container, Total } from "./styles";
import Button from "../../../components/Button";
import Stars from "../../../components/RatingStars";
import Menu from "../../../components/Menu/desktop";
import EvaluationCard from "../../../components/EvaluationCard";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import { useUser } from "../../../providers/user";
import { useParams } from "react-router-dom";
import type { IProduct, IProductEvaluation, ITreatedProduct } from "../../../@types";
import ProducerCard from "../../../components/Producer_Cart/desktop";
import { useCart } from "../../../providers/cart";
import { priceFormatter } from "../../../utils";
import { ReactComponent as HeartSVG } from "../../../assets/images-mobile/heart.svg";
import { errorToast, successToast } from "../../../utils";

interface Params {
	id: string;
}
const ProductPageComponentDesktop = () => {
	const [treatedProduct, setTreatedProduct] = useState<ITreatedProduct>(
		{} as ITreatedProduct,
	);

	const param: Params = useParams();
	const { initController, user } = useUser();
	const [qty, setQty] = useState<number>(0);
	const [total, setTotal] = useState<number>(0);
	const { cart, setCart } = useCart();

	const controller = initController();

	useEffect(() => {
		controller.getProduct(Number(param.id)).then((APIProduct: IProduct) => {
			const treatedProduct = controller.getEvaluationsAverage(APIProduct);

			if (treatedProduct.product.id)
				treatedProduct.isFavorite = user.personalData.favorites.includes(
					treatedProduct.product.id,
				);

			if (APIProduct?.evaluations?.length) {
				// treatedProduct.average = APIProduct.evaluations.reduce(
				// 	(acc, evaluation) => {
				// 		if (evaluation.grade) {
				// 			return acc + evaluation.grade;
				// 		}
				// 		return acc;
				// 	},
				// 	0,
				// );
				APIProduct.evaluations.forEach(evaluation => {
					controller.getProductEvaluationData(evaluation).then(response => {
						console.log("evaluation :>> ", response);
						if (response.avaliatorImage && response.avaliatorName) {
							evaluation.avaliatorId = response.avaliatorId;
							evaluation.avaliatorImage = response.avaliatorImage;
							evaluation.avaliatorName = response.avaliatorName;
						}
					});
				});

				treatedProduct.product.evaluations = APIProduct.evaluations;
			}

			setTreatedProduct(treatedProduct);
		});
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		console.log("treatedProduct :>> ", treatedProduct);
		// setTreatedProduct(treatedProduct);
	}, [treatedProduct]);

	const increment = () => {
		setQty(qty + 10);
	};

	const decrement = () => {
		if (qty >= 10) {
			setQty(qty - 10);
		}
	};

	const handleFavorites = async () => {
		const { favorites } = user.personalData;
		if (treatedProduct.isFavorite) {
			const newFavorites = favorites.filter(
				favorite => favorite !== treatedProduct.product.id,
			);
			user.personalData.favorites = newFavorites;

			await controller.handleFavorite(
				user.personalData.id,
				newFavorites,
				user.token,
			);
			treatedProduct.isFavorite = false;
			// setTreatedProduct(treatedProduct);
		} else {
			if (treatedProduct.product.id)
				favorites.push(treatedProduct?.product?.id);

			await controller.handleFavorite(
				user.personalData.id,
				favorites,
				user.token,
			);
			treatedProduct.isFavorite = true;
			// setTreatedProduct(treatedProduct);
		}
	};

	const addToCart = (newProduct: IProduct) => {
		if (qty) {
			if (cart?.productsList?.length) {
				const isAlreadyInCart = cart.productsList.find(product => {
					return product.id === newProduct.id;
				});

				const isFromSameSeller =
					newProduct.userId === cart.productsList[0].userId;

				if (isFromSameSeller) {
					if (isAlreadyInCart) {
						isAlreadyInCart.qty += newProduct.qty;
						cart.totalPrice += newProduct.qty * newProduct.price;
					} else {
						const qtyToAdd = qty < newProduct.qty ? qty : newProduct.qty;

						setCart({
							productsList: [
								...cart.productsList,
								{ ...newProduct, qty: qtyToAdd },
							],
							totalPrice: cart.totalPrice + newProduct.qty * newProduct.price,
						});
					}
					successToast("O produto adicionado ao carrinho.");
				} else {
					errorToast("Por favor, escolha produtos do mesmo vendedor.");
				}
			} else {
				const qtyToAdd = qty < newProduct.qty ? qty : newProduct.qty;

				setCart({
					productsList: [{ ...newProduct, qty: qtyToAdd }],
					totalPrice: qtyToAdd * newProduct.price,
				});
				successToast("O produto foi adicionado ao carrinho");
			}
		} else {
			errorToast("Por favor, informe uma quantidade.");
		}
	};

	useEffect(() => {
		setTotal(prev => {
			if (prev !== qty) {
				return treatedProduct?.product?.price * qty;
			}
			return qty;
		});
		// eslint-disable-next-line
	}, [qty]);

	return (
		<>
			<Menu />

			<Total>
				<div className="favorite">
					{user && user.auth && treatedProduct.isFavorite ? (
						<button onClick={handleFavorites}>
							Remover dos favoritos:
							<HeartSVG data-css="grayHeart" />
						</button>
					) : (
						<button onClick={handleFavorites}>
							Adicionar aos favoritos:
							<HeartSVG />
						</button>
					)}
				</div>
				<div className="totalButtons">
					<span className="total">{priceFormatter(total)}</span>
					<div className="buttons">
						<button onClick={decrement}>-</button>
						<span>{qty}Kg</span>
						<button onClick={increment}>+</button>
					</div>
				</div>
			</Total>

			<Container>
				<h1>{treatedProduct.product && treatedProduct?.product?.name}</h1>
				<div className="container">
					<Carousel itemsToShow={1} isRTL={false} showArrows={true}>
						{treatedProduct?.product?.images.map((image, index) => (
							<img
								src={image.url}
								alt={treatedProduct?.product?.name}
								key={index}
							/>
						))}
					</Carousel>
					<ProducerCard
						producerId={treatedProduct?.product?.userId}
						average={treatedProduct.average}
					/>
				</div>
				<Button
					type="button"
					color="green"
					onClick={() => addToCart(treatedProduct.product)}
				>
					Adicionar ao carrinho
				</Button>
				<div className="scroll">
					<div className="qty">
						Em estoque <span>{treatedProduct?.product?.qty}kg</span>
					</div>
					<p>{treatedProduct?.product?.description}</p>

					<div className="general-evaluation">
						<h3>Avaliações</h3>
						<div>
							<Stars readOnly={true} value={treatedProduct.average} />
							<span>Avaliação geral</span>
						</div>
					</div>

					<div className="evaluation-cards">
						{treatedProduct?.product?.evaluations.length > 0 &&
							treatedProduct?.product?.evaluations.map(
								(evaluation: IProductEvaluation) => {
									return (
										<EvaluationCard
											scenery="desktop"
											evaluation={evaluation}
											key={evaluation.id}
										/>
									);
								},
							)}
					</div>
				</div>
			</Container>
		</>
	);
};

export default ProductPageComponentDesktop;
