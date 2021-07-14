import {
  Container,
  GeneralEvaluation,
  ProductInformation,
  Wrapper,
} from "./styles";
import Button from "../../../Components/Button";
import Stars from "../../../Components/RatingStars";
import Menu from "../../../Components/Menu/mobile";
import EvaluationCard from "../../../Components/EvaluationCard";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import { useUser } from "../../../Providers/user";
import { useParams } from "react-router-dom";
import { IProduct } from "../../../@types";
import Modal from "../addToCart/addToCart";
import ProducerCard from "../../../Components/Producer_Cart/mobile";

interface Params {
  id: string;
}
const ProductPageComponentMobile = () => {
  const imageURL =
    "https://i.pinimg.com/736x/06/7f/fc/067ffce23a51a61b247f86e8b7936ee0.jpg";
  const imageURL2 =
    "https://image.freepik.com/vector-gratis/mercado-linea-caja-carton-frutas-verduras-entrega-alimentos-frescos-tienda-comestibles_24640-64229.jpg";

  const defaultEvaluation = {
    name: "Anonymus",
    image: imageURL2,
    feedback: ``,
    grade: 2,
  };
  const [product, setProducts] = useState<IProduct>({} as IProduct);
  const [average, setAverage] = useState<number>(0);

  const param: Params = useParams();
  const { initController } = useUser();
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const getProductData = async () => {
      const controller = initController();

      const productData = await controller.getProduct(Number(param.id));
      const Average = await controller.getEvaluationsAverage(productData);
      setAverage(Average.average);

      const newEvaluations = await controller.getAllEvaluationsData(
        productData.evaluations
      );
      productData.evaluations = newEvaluations;
      setProducts(productData);
    };

    getProductData();
    // eslint-disable-next-line
  }, []);

  const toggleModal = () => {
    console.log("teste");
    setOpenModal(!openModal);
  };

  return (
    <Wrapper>
      <Menu />
      {openModal === true && (
        <Modal product={product} toggleModal={toggleModal} />
      )}
      <Container>
        <Carousel itemsToShow={1} isRTL={false} showArrows={true}>
          {!!product.images ? (
            product.images.map((obj, index) => {
              return <img src={`${obj.url}`} alt={product.name} key={index} />;
            })
          ) : (
            <img src={`${imageURL2}`} alt={product.name} />
          )}
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
          <ProducerCard />
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
                    evaluation={item || defaultEvaluation}
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
