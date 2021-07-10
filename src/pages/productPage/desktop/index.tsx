import { Container } from "./styles";
import Button from "../../../Components/Button";
import Stars from "../../../Components/RatingStars";
import Menu from "../../../Components/Menu/desktop";
import EvaluationCard from "../../../Components/EvaluationCard";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import { useUser } from "../../../Providers/user";
import { useParams } from "react-router-dom";
import { IProduct } from "../../../@types";

interface Params {
  id: string;
}
const ProductPageComponentDesktop = () => {
  const imageURL =
    "https://i.pinimg.com/736x/06/7f/fc/067ffce23a51a61b247f86e8b7936ee0.jpg";
  const imageURL2 =
    "https://image.freepik.com/vector-gratis/mercado-linea-caja-carton-frutas-verduras-entrega-alimentos-frescos-tienda-comestibles_24640-64229.jpg";

  const evaluation = {
    name: "Bino Ferreira 2",
    image: imageURL2,
    feedback: `Lorem ipsum dolor sit, amet consectetur
    adipisicing elit. Eius, dignissimos accusantium perspiciatis alias
    recusandae consequatur neque nesciunt cum? Totam tempore iste labore
    repellendus, consectetur cupiditate nisi ad praesentium quibusdam
    quisquam.`,
    grade: 2,
  };

  const [product, setProducts] = useState<IProduct>({} as IProduct);

  const param: Params = useParams();
  const { initController } = useUser();

  useEffect(() => {
    const getProductData = async () => {
      const controller = initController();
      const productData = await controller.getProduct(Number(param.id));

      setProducts(productData);
    };

    getProductData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <h1>{product?.name}</h1>
        <div className="container">
          <Carousel itemsToShow={1} isRTL={false} showArrows={true}>
            <img src={imageURL} alt="asd" />
            <img src={imageURL2} alt="asd" />
          </Carousel>
          <div className="productorCard"></div>
        </div>
        <Button type="button" color="green">
          Adicionar ao carrinho
        </Button>
        <div className="scroll">
          <div className="qty">
            Em estoque <span>{product?.qty}kg</span>
          </div>
          <p>
            {product?.description} Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eius, dignissimos accusantium perspiciatis alias
            recusandae consequatur neque nesciunt cum? Totam tempore iste labore
            repellendus, consectetur cupiditate nisi ad praesentium quibusdam
            quisquam.
          </p>

          <div className="general-evaluation">
            <h3>Avaliações</h3>
            <div>
              <Stars readOnly={true} value={2.4} />
              <span>Avaliação geral</span>
            </div>
          </div>

          <div className="evaluation-cards">
            <EvaluationCard scenery="desktop" evaluation={evaluation} />
            <EvaluationCard scenery="desktop" evaluation={evaluation} />
            <EvaluationCard scenery="desktop" evaluation={evaluation} />
            <EvaluationCard scenery="desktop" evaluation={evaluation} />
            <EvaluationCard scenery="desktop" evaluation={evaluation} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductPageComponentDesktop;
