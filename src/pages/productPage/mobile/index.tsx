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
const ProductPageComponentMobile = () => {
	const [treatedProduct, setProduct] = useState<ITreatedProduct>(
		{} as ITreatedProduct,
	);

	const param: Params = useParams();
	const { initController, user } = useUser();
	const [openModal, setOpenModal] = useState<boolean>(false);

	const controller = initController();

	// useEffect(() => {
	// 	controller.getProduct(Number(param.id)).then((APIProduct: IProduct) => {
	// 		const treatedProduct = controller.getEvaluationsAverage(APIProduct);

	// 		treatedProduct.isFavorite = user.personalData.favorites.includes(
	// 			treatedProduct?.product?.id,
	// 		);

	// 		if (APIProduct?.evaluations?.length) {
	// 			treatedProduct.average = APIProduct.evaluations.reduce(
	// 				(acc, evaluation) => {
	// 					if (evaluation.grade) {
	// 						return acc + evaluation.grade;
	// 					}
	// 					return acc;
	// 				},
	// 				0,
	// 			);
	// 			APIProduct.evaluations.forEach(evaluation => {
	// 				controller.getEvaluationData(evaluation).then(response => {
	// 					if (response.image && response.name) {
	// 						evaluation.userId = response.userId;
	// 						evaluation.image = response.image;
	// 						evaluation.name = response.name;
	// 					}
	// 				});
	// 			});
	// 		}

	// 		setProduct(treatedProduct);
	// 	});
	// 	// eslint-disable-next-line
	// }, []);

	const toggleModal = () => {
		setOpenModal(!openModal);
	};

	const handleFavorites = async () => {
		// const { favorites } = user.personalData;

		// favorites.push(treatedProduct?.product?.id);

		// await controller.handleFavorite(
		// 	user.personalData.id,
		// 	favorites,
		// 	user.token,
		// );
		// treatedProduct.isFavorite = user.personalData.favorites.includes(
		// 	treatedProduct?.product?.id,
		// );
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
				<Carousel itemsToShow={1} isRTL={false} showArrows={false}>
					{treatedProduct?.product?.images &&
						treatedProduct?.product?.images.map((obj, index) => (
							<img
								src={`${obj.url}`}
								alt={treatedProduct?.product?.name}
								key={index}
							/>
						))}
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

export default ProductPageComponentMobile;
