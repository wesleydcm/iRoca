import { Container, Modal, InputPlusMinus } from "./styles";
import Button from "../../../components/Button";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { priceFormatter } from "../../../utils/";
import { useCart } from "../../../providers/cart";
import { IProduct } from "../../../@types";

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
    if (qty > 10) {
      setQty(qty - 10);
    }
  };

  const addToCart = () => {
    const newProduct = { ...product, qty, totalPrice: total };
    // setCart([...cart, newProduct]);
  };

  useEffect(() => {
    setTotal(price * qty);
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
