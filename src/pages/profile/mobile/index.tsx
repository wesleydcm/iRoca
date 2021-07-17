import {
	Container,
	ContactContent,
	ToggleRendering,
	EvaluationContent,
	ProductContent,
} from "./style";
import { ReactComponent as ArrowToBack } from "../../../assets/images-mobile/arrow-to-back.svg";
import { useState, useEffect } from "react";
import RatingStar from "../../../components/RatingStars";
import ProductCardInAnnouncementMobile from "../../../components/ProductCardInAnnouncement/mobile";
import EvaluationCard from "../../../components/EvaluationCard";
import { Link, useHistory, useParams } from "react-router-dom";
import { useUser } from "../../../providers/user";
import Loading from "../../../components/Loading";
import { IUserInfo, IProduct, IUserEvaluation } from "../../../@types";
import {
	EDIT_PRODUCT_LOCALSTORAGE_FLAG,
	FEEDBACK_MESSAGES,
} from "../../../utils";

interface Params {
	id: string;
}

const ProfilePageMobile = (): JSX.Element => {
	const param: Params = useParams();
	const { user } = useUser();
	const [display, setDisplay] = useState(true);
	const [load, setLoad] = useState(false);
	const [profile, setProfile] = useState<IUserInfo>();
	const [evaluationsList, setEvaluationList] = useState<IUserEvaluation[]>([]);
	const [averageEvaluation, setAverageEvaluation] = useState<number>();
	const [profileProducts, setProfileProducts] = useState<IProduct[]>([]);
	const { initController } = useUser();
	const controller = initController();
	const history = useHistory();
	useEffect(() => {
		setLoad(true);
		controller.getUser(Number(param.id)).then(response => setProfile(response));
		controller.getEvaluationsOfUser(Number(param.id)).then((response: any) => {
			setEvaluationList(response);
			setLoad(false);
		});
		controller
			.getProductsOfUser(Number(param.id))
			.then(response => setProfileProducts(response));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		const average =
			Number(
				evaluationsList?.reduce((acc, evaluation) => {
					return acc + evaluation.grade;
				}, 0),
			) / Number(evaluationsList?.length);

		setAverageEvaluation(average);
	}, [evaluationsList]);

	const handleToggle = (value: boolean) => {
		setLoad(true);
		setDisplay(value);
		setLoad(false);
	};
	const handleEditProduct = (productId: number) => {
		localStorage.setItem(
			EDIT_PRODUCT_LOCALSTORAGE_FLAG,
			JSON.stringify(productId),
		);
		user.personalData.id === Number(param.id)
			? history.push(`/myaccount/profile/update-product/${productId}`)
			: history.push(`/product/${productId}`);
	};

	return (
		<Container>
			<ContactContent>
				{user.personalData.id === Number(param.id)
					? "Meu perfil"
					: "Perfil do Produtor"}
				<Link to="/myaccount">
					<ArrowToBack />
				</Link>
				<img src={profile?.image} alt="user" />
				<h2>{profile?.name}</h2>
				<h4>{profile?.phone}</h4>
				<h4>{profile?.email}</h4>
			</ContactContent>
			<ToggleRendering buttonActive={display}>
				<button onClick={() => handleToggle(true)}>
					<span>Avaliações</span>
				</button>
				<button onClick={() => handleToggle(false)}>
					<span>Produtos</span>
				</button>
			</ToggleRendering>
			{load ? (
				<Loading size={90} />
			) : (
				<>
					{display ? (
						<EvaluationContent>
							<div>
								<h4>Avaliação Geral</h4>
								<RatingStar readOnly value={averageEvaluation} />
							</div>
							{evaluationsList.length ? (
								evaluationsList?.map(evaluation => (
									<EvaluationCard
										evaluation={evaluation}
										scenery="mobile"
										key={evaluation.id}
									/>
								))
							) : (
								<h2>{FEEDBACK_MESSAGES.WITHOUT_EVALUATION}</h2>
							)}
						</EvaluationContent>
					) : (
						<ProductContent>
							{profileProducts.length ? (
								profileProducts.map(myProduct => (
									<ProductCardInAnnouncementMobile
										item={{
											product: myProduct,
											average: Number(averageEvaluation),
										}}
										key={myProduct.id}
										editProduct={handleEditProduct}
										ownerProducter={true}
									/>
								))
							) : (
								<h2>{FEEDBACK_MESSAGES.WITHOUT_PRODUCTS}</h2>
							)}
						</ProductContent>
					)}
				</>
			)}
		</Container>
	);
};
export default ProfilePageMobile;
