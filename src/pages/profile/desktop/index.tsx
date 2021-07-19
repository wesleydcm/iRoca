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
import ProductCardInAnnouncement from "../../../components/ProductCardInAnnouncement/desktop";
import EvaluationCard from "../../../components/EvaluationCard";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../../../providers/user";
import Loading from "../../../components/Loading";
import { IUser, IProduct, IUserEvaluation, IUserInfo } from "../../../@types";
import {
	EDIT_PRODUCT_LOCALSTORAGE_FLAG,
	FEEDBACK_MESSAGES,
} from "../../../utils";
import { useHistory } from "react-router-dom";

interface Params {
	id: string;
}
const ProfilePageDesktop = (): JSX.Element => {
	const param: Params = useParams();
	const [userProductsList, setUserProductsList] = useState<IProduct[]>([]);
	const [display, setDisplay] = useState(true);
	const [isLoading, setIsLoading] = useState(true);
	const [currentProfile, setCurrentProfile] = useState<IUser>({} as IUser);
	const { user, initController } = useUser();
	const controller = initController();
	const history = useHistory();

	useEffect(() => {
		const fetchCurrentProfile = async () => {
			const fetchedUser: IUser = {} as IUser;

			const APIProfile: IUserInfo = await controller.getUser(Number(param.id));
			fetchedUser.personalData = APIProfile;

			const profileEvalList = await controller.getUserEvaluations(
				Number(param.id),
			);

			if (profileEvalList) {
				fetchedUser.evaluations = await controller.getAllSellerEvaluationsData(
					profileEvalList,
				);
				fetchedUser.average =
					profileEvalList.reduce(
						(acc, evaluation) => acc + evaluation.grade,
						0,
					) / fetchedUser.evaluations.length;
			}

			const profileProductsList = await controller.getUserProducts(
				Number(param.id),
			);

			setCurrentProfile({ ...fetchedUser });
			setUserProductsList(profileProductsList);
			setIsLoading(false);
		};

		fetchCurrentProfile();
		// eslint-disable-next-line
	}, [param.id]);

	const handleToggle = (value: boolean) => {
		setDisplay(value);
	};

	const handleEditProduct = (productId: number) => {
		localStorage.setItem(
			EDIT_PRODUCT_LOCALSTORAGE_FLAG,
			JSON.stringify(productId),
		);

		history.push(`/myaccount/edit-product/${productId}`);
	};

	return (
		<Container>
			<h1>
				{user.personalData.id === Number(param.id)
					? "Meu perfil"
					: "Perfil do Vendedor"}

				<Link to="/myaccount">
					<ArrowToBack />
				</Link>
			</h1>
			{isLoading ? (
				<Loading size={100} />
			) : (
				<>
					<ContactContent>
						<img
							src={currentProfile.personalData?.image}
							alt={currentProfile.personalData?.name}
						/>
						<div className="contacts">
							<h2>{currentProfile.personalData?.name}</h2>
							<h3>Contato</h3>
							<h4>Telefone: {currentProfile.personalData?.phone}</h4>
							<h4>Email: {currentProfile.personalData?.email}</h4>
						</div>
					</ContactContent>
					<ToggleRendering buttonActive={display}>
						<button onClick={() => handleToggle(true)}>
							<span>Avaliações</span>
						</button>
						<button onClick={() => handleToggle(false)}>
							<span>Produtos</span>
						</button>
					</ToggleRendering>
					{display ? (
						<EvaluationContent>
							<div className="averageEvaluation">
								<h4>Avaliação Geral</h4>
								<RatingStar readOnly value={currentProfile.average} />
							</div>
							{currentProfile.evaluations?.length ? (
								<ul>
									{currentProfile.evaluations.map(
										(evaluation: IUserEvaluation) => (
											<EvaluationCard
												evaluation={evaluation}
												scenery="desktop"
												key={evaluation.id}
											/>
										),
									)}
								</ul>
							) : (
								<h2>{FEEDBACK_MESSAGES.WITHOUT_EVALUATION}</h2>
							)}
						</EvaluationContent>
					) : (
						<ProductContent>
							{userProductsList.length ? (
								userProductsList.map(myProduct => (
									<ProductCardInAnnouncement
										item={{
											product: myProduct,
											average: Number(currentProfile.average),
										}}
										key={myProduct.id}
										editProduct={handleEditProduct}
										ownerProducer={true}
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
export default ProfilePageDesktop;
