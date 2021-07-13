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
//import Carousel from "react-elastic-carousel";
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

  const evaluation = {
    name: "Bino Ferreira 2",
    image: imageURL2,
    feedback: "Avaliação 333 lm",
    grade: 2,
  };

  const [product, setProducts] = useState<IProduct>({} as IProduct);

  const param: Params = useParams();
  const { initController } = useUser();
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const getProductData = async () => {
      const controller = initController();
      //const productData = await controller.getProduct(Number(param.id));

      //setProducts(productData);
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
       {/* <Carousel itemsToShow={1} isRTL={false} showArrows={false}>
          <img src={imageURL} alt="asd" />
          <img src={imageURL2} alt="asd" />
      </Carousel>*/}
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
              <Stars readOnly={true} value={2.4} />
              <span>Avaliação geral</span>
            </div>
          </GeneralEvaluation>
          <div className="evaluation-cards">
            <EvaluationCard scenery="mobile" evaluation={evaluation} />
            <EvaluationCard scenery="mobile" evaluation={evaluation} />
            <EvaluationCard scenery="mobile" evaluation={evaluation} />
            <EvaluationCard scenery="mobile" evaluation={evaluation} />
            <EvaluationCard scenery="mobile" evaluation={evaluation} />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ProductPageComponentMobile;
