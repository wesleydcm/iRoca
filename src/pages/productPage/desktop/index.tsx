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
import userEvent from "@testing-library/user-event";

interface Params {
  id: string;
}
const ProductPageComponentDesktop = () => {
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
  const { initController, user } = useUser();
  const [qty, setQty] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const { cart, setCart } = useCart();

  const price = product?.price || 0;

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

  const increment = () => {
    setQty(qty + 10);
  };
  const decrement = () => {
    if (qty >= 10) {
      setQty(qty - 10);
    }
  };

  const addToCart = () => {
    const newProduct = { product: { ...product, qty }, totalPrice: total };
    if (newProduct.product.qty > 0) {
      if (cart.length > 0) {
        if (newProduct.product.userId === cart[0].product.userId) {
          const haveProductInCart = cart.filter(
            (item) => item.product.id === newProduct.product.id
          );
          if (haveProductInCart.length > 0) {
            const newProduct2 = {
              totalPrice:
                haveProductInCart[0].totalPrice + newProduct.totalPrice,
              product: {
                ...haveProductInCart[0].product,
                qty: haveProductInCart[0].product.qty + newProduct.product.qty,
              },
            };
            const newCart = cart.map((item) => {
              if (item.product.id === newProduct2.product.id) {
                return newProduct2;
              } else {
                return item;
              }
            });
            setCart(newCart);
          } else {
            setCart([
              ...cart,
              {
                product: {
                  ...newProduct.product,
                },
                totalPrice: newProduct.totalPrice,
              },
            ]);
          }
        }
      } else {
        setCart([
          ...cart,
          {
            product: {
              ...newProduct.product,
            },
            totalPrice: newProduct.totalPrice,
          },
        ]);
      }
    }
  };

  useEffect(() => {
    setTotal(price * qty);
    // eslint-disable-next-line
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
            {!!product.images ? (
              product.images.map((obj, index) => {
                return (
                  <img src={`${obj.url}`} alt={product.name} key={index} />
                );
              })
            ) : (
              <img src={`${imageURL2}`} alt={product.name} />
            )}
          </Carousel>
          <ProducerCard producerId={product.userId} average={average} />
        </div>
        <Button type="button" color="green" onClick={addToCart}>
          Adicionar ao carrinho
        </Button>
        <div className="scroll">
          <div className="qty">
            Em estoque <span>{product?.qty}kg</span>
          </div>
          <p>{product?.description}</p>

          <div className="general-evaluation">
            <h3>Avaliações</h3>
            <div>
              <Stars readOnly={true} value={average} />
              <span>Avaliação geral</span>
            </div>
          </div>

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
    </>
  );
};

export default ProductPageComponentDesktop;
