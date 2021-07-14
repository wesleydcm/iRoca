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
import { IUserInfo, IEvaluation, IProduct } from "../../../@types";
import {
  EDIT_PRODUCT_LOCALSTORAGE_FLAG,
  FEEDBACK_MESSAGES,
} from "../../../utils";
import { useHistory } from "react-router-dom";
interface Evaluations {
  avaliator: IUserInfo;
  evaluation: IEvaluation;
}
interface Params {
  id: string;
}
const ProfilePageDesktop = (): JSX.Element => {
  const param: Params = useParams();
  const { user } = useUser();
  const [profile, setProfile] = useState<IUserInfo>();
  const [display, setDisplay] = useState(true);
  const [load, setLoad] = useState(false);
  const [evaluation, setEvaluation] = useState<Evaluations[]>([]);
  const [averageEvaluation, setAverageEvaluation] = useState<number>();
  const [profileProducts, setProfileProducts] = useState<IProduct[]>([]);
  const { initController } = useUser();
  const controller = initController();
  const history = useHistory();

  useEffect(() => {
    setLoad(true);
    controller
      .getUser(Number(param.id))
      .then((response) => setProfile(response));

    controller.getEvaluationsOfUser(Number(param.id)).then((response: any) => {
      setEvaluation(response);
      setLoad(false);
    });

    controller
      .getProductsOfUser(Number(param.id))
      .then((response) => setProfileProducts(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const average =
      Number(
        evaluation?.reduce((acc, evaluation) => {
          return acc + evaluation.evaluation.grade;
        }, 0)
      ) / Number(evaluation?.length);

    setAverageEvaluation(average);
  }, [evaluation]);

  const handleToggle = (value: boolean) => {
    setLoad(true);
    setDisplay(value);
    setLoad(false);
  };

  const handleEditProduct = (productId: number) => {
    localStorage.setItem(
      EDIT_PRODUCT_LOCALSTORAGE_FLAG,
      JSON.stringify(productId)
    );

    user.personalData.id === Number(param.id)
      ? history.push(`/myaccount/profile/update-product/${productId}`)
      : history.push(`/product/${productId}`);
  };

  return (
    <Container>
      <h1>
        Meu Perfil
        <Link to="/myaccount">
          <ArrowToBack />
        </Link>
      </h1>
      <ContactContent>
        <img src={profile?.image} alt="user" />
        <div className="contacts">
          <h2>{profile?.name}</h2>
          <h3>Contato</h3>
          <h4>Telefone: {profile?.phone}</h4>
          <h4>Email: {profile?.email}</h4>
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
      {load ? (
        <Loading size={90} />
      ) : (
        <>
          {display ? (
            <EvaluationContent>
              <div className="averageEvaluation">
                <h4>Avaliação Geral</h4>
                <RatingStar readOnly value={averageEvaluation} />
              </div>
              {evaluation.length ? (
                evaluation?.map((evaluation, index) => (
                  <EvaluationCard
                    evaluation={{
                      name: evaluation.avaliator.name,
                      image: evaluation.avaliator.image,
                      grade: evaluation.evaluation.grade,
                      feedback: evaluation.evaluation.feedback,
                    }}
                    scenery="desktop"
                    key={index}
                  />
                ))
              ) : (
                <h2>{FEEDBACK_MESSAGES.WITHOUT_EVALUATION}</h2>
              )}
            </EvaluationContent>
          ) : (
            <ProductContent>
              {profileProducts.length ? (
                profileProducts.map((myProduct) => (
                  <ProductCardInAnnouncement
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
export default ProfilePageDesktop;
