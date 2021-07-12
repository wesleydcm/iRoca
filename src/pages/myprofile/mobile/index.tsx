import {
  Container,
  ContactContent,
  ToggleRendering,
  EvaluationContent,
  ProductContent,
} from "./style";
import { ReactComponent as ArrowToBack } from "../../../assets/images-mobile/arrow-to-back.svg";
import { useState, useEffect } from "react";
import RatingStar from "../../../Components/RatingStars";
import ProductCardInAnnouncementMobile from "../../../Components/ProductCardInAnnouncement/mobile";
import EvaluationCard from "../../../Components/EvaluationCard";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../../Providers/user";
import Loading from "../../../Components/Loading";
import { IUserInfo, IEvaluation, IProduct } from "../../../@types";
import { EDIT_PRODUCT_LOCALSTORAFE_FLAG } from "../../../utils";
interface Evaluations {
  avaliator: IUserInfo;
  evaluation: IEvaluation;
}

const ProfilePageMobile = (): JSX.Element => {
  const [display, setDisplay] = useState(true);
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState<IUserInfo>();
  const [evaluation, setEvaluation] = useState<Evaluations[]>();
  const [generalEvaluation, setAverageEvaluation] = useState<number>();
  const [myProducts, setMyProducts] = useState<IProduct[]>([]);
  const { initController } = useUser();
  const controller = initController();
  const history = useHistory();
  useEffect(() => {
    setLoad(true);
    controller.getUser(1).then((response) => setUser(response));
    controller.getEvaluationsOfUser(1).then((response: any) => {
      setEvaluation(response);
      setLoad(false);
    });
    controller.getProductsOfUser(2).then((response) => setMyProducts(response));

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
    history.push("/myAccount/profile/product");
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
                <RatingStar readOnly value={generalEvaluation} />
              </div>
              {evaluation?.map((evaluation, index) => (
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
              ))}
            </EvaluationContent>
          ) : (
            <ProductContent>
              {myProducts.map((myProduct) => (
                <button onClick={() => handleEditProduct(myProduct.id)}>
                  <ProductCardInAnnouncementMobile
                    item={myProduct}
                    key={myProduct.id}
                  />
                </button>
              ))}
            </ProductContent>
          )}
        </>
      )}
    </Container>
  );
};
export default ProfilePageMobile;
