import {
	Container,
	GeneralEvaluation,
	ProductInformation,
	Wrapper,
} from "./styles";
import Button from "../../../components/Button";
import Stars from "../../../components/RatingStars";
import Menu from "../../../components/Menu/mobile";
import EvaluationCard from "../../../components/EvaluationCard";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import { useUser } from "../../../providers/user";
import { useParams } from "react-router-dom";
import { IProduct, ITreatedProduct } from "../../../@types";
import Modal from "../addToCart/addToCart";
import ProducerCard from "../../../components/Producer_Cart/mobile";
import { ReactComponent as HeartSVG } from "../../../assets/images-mobile/heart.svg";

interface Params {
	id: string;
}
const ProductPageMobile = () => {
	const [treatedProduct, setTreatedProduct] = useState<ITreatedProduct>(
		{} as ITreatedProduct,
	);

	const param: Params = useParams();
	const { initController, user } = useUser();
	const [openModal, setOpenModal] = useState<boolean>(false);

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

	const toggleModal = () => {
		setOpenModal(!openModal);
	};

	const handleFavorites = async () => {
		const { favorites } = user.personalData;
		if (treatedProduct.isFavorite) {
			const newFavorites = favorites.filter(
				favorite => favorite !== treatedProduct.product.id,
			);
			user.personalData.favorites = newFavorites;

			if (user.token)
				await controller.handleFavorite(
					user.personalData.id,
					newFavorites,
					user.token,
				);

			setTreatedProduct({ ...treatedProduct, isFavorite: false });
		} else {
			if (treatedProduct.product.id)
				favorites.push(treatedProduct?.product?.id);

			if (user.token)
				await controller.handleFavorite(
					user.personalData.id,
					favorites,
					user.token,
				);

			setTreatedProduct({ ...treatedProduct, isFavorite: true });
		}
	};

	return (
		<Wrapper>
			<Menu />
			{openModal === true && (
				<Modal
					product={treatedProduct.product}
					toggleModal={toggleModal}
					Price={Number(treatedProduct?.product?.price)}
				/>
			)}
			<Container>
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
						<img
							src="https://heloix.com/wp-content/uploads/2020/11/product_default_icon.jpg"
							alt="Produto sem imagens."
						/>
					)}
				</Carousel>
				<Button type="button" color="green" onClick={toggleModal}>
					Adicionar ao carrinho
				</Button>
				<div className="scroll">
					<ProductInformation>
						<p>{treatedProduct?.product?.description}</p>
						<div>
							Em estoque <span>{treatedProduct?.product?.qty}kg</span>
						</div>
					</ProductInformation>
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
					<ProducerCard
						producerId={treatedProduct?.product?.userId}
						average={treatedProduct.average}
					/>
					<GeneralEvaluation>
						<h3>Avaliações</h3>
						<div>
							<Stars readOnly={true} value={treatedProduct.average} />
							<span>Avaliação geral</span>
						</div>
					</GeneralEvaluation>
					<div className="evaluation-cards">
						{treatedProduct?.product?.evaluations.map((item, index) => {
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
		</Wrapper>
	);
};

export default ProductPageMobile;
