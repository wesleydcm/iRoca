import { Container, Total } from "./styles";
import Button from "../../../components/Button";
import Stars from "../../../components/RatingStars";
import Menu from "../../../components/Menu/desktop";
import EvaluationCard from "../../../components/EvaluationCard";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import { useUser } from "../../../providers/user";
import { useParams } from "react-router-dom";
import type { IProduct, ITreatedProduct } from "../../../@types";
import ProducerCard from "../../../components/Producer_Cart/desktop";
import { useCart } from "../../../providers/cart";
import { priceFormatter } from "../../../utils";
import { ReactComponent as HeartSVG } from "../../../assets/images-mobile/heart.svg";
import { errorToast, successToast } from "../../../utils";

interface Params {
	id: string;
}
const ProductPageDesktop = () => {
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
		const asyncFetch = async () => {
			const fetchedProduct: IProduct = await controller.getProduct(
				Number(param.id),
			);
			const treatedProduct = controller.getEvaluationsAverage(fetchedProduct);

			if (treatedProduct.product.id) {
				treatedProduct.isFavorite = user.personalData.favorites.includes(
					treatedProduct.product.id,
				);
			}

			const { evaluations } = treatedProduct.product;

			for (let i = 0; i < evaluations.length; i++) {
				evaluations[i] = await controller.getProductEvaluationData(
					evaluations[i],
				);
			}

			setTreatedProduct(treatedProduct);
		};
		asyncFetch();
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

			setTreatedProduct({ ...treatedProduct, isFavorite: false });
		} else {
			if (treatedProduct.product.id)
				favorites.push(treatedProduct?.product?.id);

			await controller.handleFavorite(
				user.personalData.id,
				favorites,
				user.token,
			);

			setTreatedProduct({ ...treatedProduct, isFavorite: true });
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
						{treatedProduct?.product?.images.length ? (
							treatedProduct.product.images.map((image, index) => (
								<img
									src={image.url}
									alt={treatedProduct?.product?.name}
									key={index}
								/>
							))
						) : (
							<img src="https://heloix.com/wp-content/uploads/2020/11/product_default_icon.jpg" alt="Produto sem imagens." />
						)}
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
						{treatedProduct.product?.evaluations.length > 0 &&
							treatedProduct.product.evaluations.map(evaluation => {
								return (
									<EvaluationCard evaluation={evaluation} key={evaluation.id} />
								);
							})}
					</div>
				</div>
			</Container>
		</>
	);
};

export default ProductPageDesktop;
