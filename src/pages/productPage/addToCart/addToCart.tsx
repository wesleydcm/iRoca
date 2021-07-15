import { Container, Modal, InputPlusMinus } from "./styles";
import Button from "../../../components/Button";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { priceFormatter } from "../../../utils/";
import { useCart } from "../../../providers/cart";
import { IProduct } from "../../../@types";
import { errorToast, successToast } from "../../../utils";

interface Props {
  toggleModal: () => void;
  product: IProduct;
  Price: number;
}

const AddToCartComponent = ({ toggleModal, product, Price }: Props) => {
  const [qty, setQty] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const { setCart, cart } = useCart();
  const price = Price;

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
            successToast("O produto foi adicionado ao carrinho")
            toggleModal();
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
            successToast("O produto foi adicionado ao carrinho")
            toggleModal();
          }
        } else {
          errorToast("Não é possível colocar no carrinho produtos de produtores diferentes")
          toggleModal();
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
        successToast("O produto foi adicionado ao carrinho")
        toggleModal();
      }
    } else {
    errorToast("Informe alguma quantidade")
    }
  };

  useEffect(() => {
    setTotal(price * qty);
    //eslint-disable-next-line
  }, [qty]);

  return (
    <Container>
      <div className="bg"></div>
      <Modal>
        <div className="price">
          Preço
          <span>{priceFormatter(price)}/kg</span>
        </div>
        <div className="total">
          <span>{priceFormatter(total)}</span>
          <Button color="green" onClick={addToCart}>
            Adicionar
          </Button>
        </div>

        <IoMdCloseCircle className="close" onClick={toggleModal} />
        <InputPlusMinus>
          <button onClick={decrement}>-</button>
          <span>{qty}Kg</span>
          <button onClick={increment}>+</button>
        </InputPlusMinus>
      </Modal>
    </Container>
  );
};

export default AddToCartComponent;
