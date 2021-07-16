import { Container, Total } from "./styles";
import Button from "../../../components/Button";
import Stars from "../../../components/RatingStars";
import Menu from "../../../components/Menu/desktop";
import EvaluationCard from "../../../components/EvaluationCard";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import { useUser } from "../../../providers/user";
import { useParams } from "react-router-dom";
import { IProduct } from "../../../@types";
import ProducerCard from "../../../components/Producer_Cart/desktop";
import { useCart } from "../../../providers/cart";
import { priceFormatter } from "../../../utils";
import { ReactComponent as HeartSVG } from "../../../assets/images-mobile/heart.svg";
import { errorToast, successToast } from "../../../utils";

interface Params {
	id: string;
}
const ProductPageComponentDesktop = () => {
	const [product, setProducts] = useState<IProduct>({} as IProduct);
	const [average, setAverage] = useState<number>(0);

	const param: Params = useParams();
	const { initController, user } = useUser();
	const [qty, setQty] = useState<number>(0);
	const [total, setTotal] = useState<number>(0);
	const { cart, setCart } = useCart();

	const controller = initController();

	const price = product?.price || 0;

	useEffect(() => {
		const getProductData = async () => {
			const productData = await controller.getProduct(Number(param.id));
			const Average = await controller.getEvaluationsAverage(productData);
			setAverage(Average.average);

			// const newEvaluations = await controller.getAllEvaluationsData(
			// 	productData.evaluations,
			// );
			// productData.evaluations = newEvaluations;

			// if (productData.evaluations) {
			// 	productData.evaluations.forEach(evaluation => {
			// 		controller.getEvaluationData(evaluation).then(response => {
			// 			if (response.image && response.name) {
			// 				evaluation.evaluatorImage = response.image;
			// 				evaluation.evaluatorName = response.name;
			// 			}
			// 		});
			// 	});
			// }
			console.log("evaluations :>> ", productData.evaluations);
			setProducts(productData);
		};

		getProductData();
		// eslint-disable-next-line
	}, []);

	const increment = () => {
		setQty(qty + 10);
	};
	const decrement = () => {
		if (qty >= 10) {
			setQty(qty - 10);
		}
	};

	const addFavorites = () => {
		const { favorites } = user.personalData;

		const favoriteProduct = {
			id: user.personalData.id,
			personalData: {
				favorites: [...favorites, product.id],
			},
			token: user.token,
		};
		controller.handleFavorite(favoriteProduct);
	};

	const addToCart = () => {
		const newProduct = { product: { ...product, qty }, totalPrice: total };
		if (newProduct.product.qty > 0) {
			if (cart.length > 0) {
				if (newProduct.product.userId === cart[0].product.userId) {
					const haveProductInCart = cart.filter(
						item => item.product.id === newProduct.product.id,
					);
					if (haveProductInCart.length > 0) {
						const newProduct2 = {
							totalPrice:
								haveProductInCart[0].totalPrice + newProduct.totalPrice,
							product: {
								...haveProductInCart[0].product,
								qty: haveProductInCart[0].product.qty + newProduct.product.qty,
							},
						};
						const newCart = cart.map(item => {
							if (item.product.id === newProduct2.product.id) {
								return newProduct2;
							} else {
								return item;
							}
						});
						setCart(newCart);
						successToast("O produto foi adicionado ao carrinho");
					} else {
						setCart([
							...cart,
							{
								product: {
									...newProduct.product,
								},
								totalPrice: newProduct.totalPrice,
							},
						]);
						successToast("O produto foi adicionado ao carrinho");
					}
				} else {
					errorToast(
						"Não é possível colocar no carrinho produtos de produtores diferentes",
					);
				}
			} else {
				setCart([
					...cart,
					{
						product: {
							...newProduct.product,
						},
						totalPrice: newProduct.totalPrice,
					},
				]);
				successToast("O produto foi adicionado ao carrinho");
			}
		} else {
			errorToast("Informe alguma quantidade");
		}
	};

	useEffect(() => {
		setTotal(price * qty);
		// eslint-disable-next-line
	}, [qty]);

	return (
		<>
			<Menu />

			<Total>
				<div className="favorite">
					{user !== null &&
						user.auth &&
						!user.personalData.favorites.includes(product.id) && (
							<button onClick={addFavorites}>
								Classificar como favorito
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
				<h1>{product?.name}</h1>
				<div className="container">
					<Carousel itemsToShow={1} isRTL={false} showArrows={true}>
						{product &&
							product.images &&
							product.images.map((obj, index) => (
								<img src={`${obj.url}`} alt={product.name} key={index} />
							))}
					</Carousel>
					<ProducerCard producerId={product.userId} average={average} />
				</div>
				<Button type="button" color="green" onClick={addToCart}>
					Adicionar ao carrinho
				</Button>
				<div className="scroll">
					<div className="qty">
						Em estoque <span>{product?.qty}kg</span>
					</div>
					<p>{product?.description}</p>

					<div className="general-evaluation">
						<h3>Avaliações</h3>
						<div>
							<Stars readOnly={true} value={average} />
							<span>Avaliação geral</span>
						</div>
					</div>

					<div className="evaluation-cards">
						{!!product &&
							!!product.evaluations &&
							product.evaluations.map((item, index) => {
								return (
									<EvaluationCard
										scenery="desktop"
										evaluation={item}
										key={index}
									/>
								);
							})}
					</div>
				</div>
			</Container>
		</>
	);
};

export default ProductPageComponentDesktop;
