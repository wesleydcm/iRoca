import { Container } from "./styles";
import Button from "../../../Components/Button";
import Stars from "../../../Components/reviews-stars";
import EvaluationCard from "../../../Components/EvaluationCard";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import { useUser } from "../../../Providers/user";
import { useParams } from "react-router-dom";
import { IProduct } from "../../../@types";

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
    image: "https://linkdaimagem.com.br.jpg",
    feedback: "Avaliação 333",
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
  }, []);

  return (
    <Container>
      <Carousel itemsToShow={1} isRTL={false} showArrows={false}>
        <img src={imageURL} alt="asd" />
        <img src={imageURL2} alt="asd" />
      </Carousel>
      <Button type="button" color="green">
        Adicionar ao carrinho
      </Button>
      <div className="scroll">
        <div className="info">
          <p>{product.category}</p>
          <div>
            Em estoque <span>{product.qty}kg</span>
          </div>
        </div>
        <div className="productorCard"></div>

        <div className="avaliacoes-geral">
          <h3>Avaliações</h3>
          <div>
            <Stars readOnly={true} value={2.4} />
            <span>Avaliação geral</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPageComponentMobile;
