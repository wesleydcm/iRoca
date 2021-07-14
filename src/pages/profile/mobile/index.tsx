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
import { IUserInfo, IEvaluation, IProduct } from "../../../@types";
import {
  EDIT_PRODUCT_LOCALSTORAFE_FLAG,
  FEEDBACK_MESSAGES,
} from "../../../utils";

interface Evaluations {
  avaliator: IUserInfo;
  evaluation: IEvaluation;
}
interface Params {
  id: string;
}

const ProfilePageMobile = (): JSX.Element => {
  const param: Params = useParams();
  const [display, setDisplay] = useState(true);
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState<IUserInfo>();
  const [evaluation, setEvaluation] = useState<Evaluations[]>([]);
  const [averageEvaluation, setAverageEvaluation] = useState<number>();
  const [profileProducts, setProfileProducts] = useState<IProduct[]>([]);
  const { initController } = useUser();
  const controller = initController();
  const history = useHistory();
  useEffect(() => {
    setLoad(true);
    controller.getUser(Number(param.id)).then((response) => setUser(response));
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
      EDIT_PRODUCT_LOCALSTORAFE_FLAG,
      JSON.stringify(productId)
    );
    history.push("/myaccount/profile/update-product");
  };

  return (
    <Container>
      <ContactContent>
        <Link to="/myAccount">
          <ArrowToBack />
        </Link>
        <img src={user?.image} alt="user" />
        <h2>{user?.name}</h2>
        <h4>{user?.phone}</h4>
        <h4>{user?.email}</h4>
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
              {evaluation.length ? (
                evaluation?.map((evaluation, index) => (
                  <EvaluationCard
                    evaluation={{
                      name: evaluation.avaliator.name,
                      image: evaluation.avaliator.image,
                      grade: evaluation.evaluation.grade,
                      feedback: evaluation.evaluation.feedback,
                    }}
                    scenery="mobile"
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
