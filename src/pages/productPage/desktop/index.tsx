import { Container, Total } from "./styles";
import Button from "../../../components/Button";
import Stars from "../../../components/RatingStars";
import Menu from "../../../components/Menu/desktop";
import EvaluationCard from "../../../components/EvaluationCard";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import { useUser } from "../../../providers/user";
import { useParams } from "react-router-dom";
import { IProduct } from "../../../@types";
import ProducerCard from "../../../components/Producer_Cart/desktop";
import { useCart } from "../../../providers/cart";
import { priceFormatter } from "../../../utils";

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
  const [qty, setQty] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const { cart, setCart } = useCart();

  const price = 2.7;
  useEffect(() => {
    const getProductData = async () => {
      const controller = initController();

      const productData = await controller.getProduct(Number(param.id));

      setProducts(productData);
    };

    getProductData();
    // eslint-disable-next-line
  }, []);

  const increment = () => {
    setQty(qty + 10);
  };
  const decrement = () => {
    if (qty > 10) {
      setQty(qty - 10);
    }
  };

  const addToCart = () => {
    const newProduct = { ...product, qty, totalPrice: total };
    setCart([...cart, newProduct]);
  };

  useEffect(() => {
    setTotal(price * qty);
  }, [qty]);

  return (
    <>
      <Menu />

      <Total>
        <span className="total">{priceFormatter(total)}</span>
        <div className="buttons">
          <button onClick={decrement}>-</button>
          <span>{qty}Kg</span>
          <button onClick={increment}>+</button>
        </div>
      </Total>
      <Container>
        <h1>{product?.name}</h1>
        <div className="container">
          <Carousel itemsToShow={1} isRTL={false} showArrows={true}>
            <img src={imageURL} alt="asd" />
            <img src={imageURL2} alt="asd" />
          </Carousel>
          <ProducerCard producerId={product.userId} />
        </div>
        <Button type="button" color="green" onClick={addToCart}>
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
