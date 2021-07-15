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
import { IProduct } from "../../../@types";
import Modal from "../addToCart/addToCart";
import ProducerCard from "../../../components/Producer_Cart/mobile";
import { ReactComponent as HeartSVG } from "../../../assets/images-mobile/heart.svg";

interface Params {
	id: string;
}
const ProductPageComponentMobile = () => {
	const [product, setProducts] = useState<IProduct>({} as IProduct);
	const [average, setAverage] = useState<number>(0);

	const param: Params = useParams();
	const { initController, user } = useUser();
	const [openModal, setOpenModal] = useState<boolean>(false);

	const controller = initController();

	useEffect(() => {
		const getProductData = async () => {
			const productData = await controller.getProduct(Number(param.id));
			const Average = await controller.getEvaluationsAverage(productData);
			setAverage(Average.average);

			const newEvaluations = await controller.getAllEvaluationsData(
				productData.evaluations,
			);
			productData.evaluations = newEvaluations;
			setProducts(productData);
		};

		getProductData();
		// eslint-disable-next-line
	}, []);

	const toggleModal = () => {
		setOpenModal(!openModal);
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

	const price = product?.price || 0;

	return (
		<Wrapper>
			<Menu />
			{openModal === true && (
				<Modal
					product={product}
					toggleModal={toggleModal}
					Price={Number(price)}
				/>
			)}
			<Container>
				<Carousel itemsToShow={1} isRTL={false} showArrows={false}>
					{product &&
						product.images &&
						product.images.map((obj, index) => (
							<img src={`${obj.url}`} alt={product.name} key={index} />
						))}
				</Carousel>
				<Button type="button" color="green" onClick={toggleModal}>
					Adicionar ao carrinho
				</Button>
				<div className="scroll">
					<ProductInformation>
						<p>
							{!!product?.description &&
								(product.description.length > 0 ? product.description : "pok")}
						</p>
						<div>
							Em estoque <span>{product?.qty}kg</span>
						</div>
					</ProductInformation>
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
					<ProducerCard producerId={product.userId} average={average} />
					<GeneralEvaluation>
						<h3>Avaliações</h3>
						<div>
							<Stars readOnly={true} value={average} />
							<span>Avaliação geral</span>
						</div>
					</GeneralEvaluation>
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
		</Wrapper>
	);
};

export default ProductPageComponentMobile;
