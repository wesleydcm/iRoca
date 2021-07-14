import { Container, Modal } from "./modalstyles";
import Button from "../../../components/Button";
import { IoMdCloseCircle } from "react-icons/io";
import { IProduct } from "../../../@types";
import { useHistory } from "react-router-dom";

interface Props {
  toggleModal: () => void;
  product: IProduct[];
}

const AddToCartComponent = ({ toggleModal, product }: Props) => {
  const history = useHistory();

  return (
    <Container>
      <div className="bg"></div>
      <Modal>
        <div className="information">
          <p>
            A compra não foi finalizada porque não há estoque suficiente dos
            itens abaixo:
          </p>
          <ul>
            {product.map((elem) => {
              return (
                <li key={elem.id}>
                  Estoque de {elem.name}: {elem.qty} kg.
                </li>
              );
            })}
          </ul>
        </div>
        <div className="btn">
          <Button color="green" onClick={() => history.push("/")}>
            Voltar
          </Button>
        </div>
        <IoMdCloseCircle className="close" onClick={toggleModal} />
      </Modal>
    </Container>
  );
};

export default AddToCartComponent;

/*

  const increment = () => {
    setQty(qty + 10);
  };
  const decrement = () => {
    if (qty > 10) {
      setQty(qty - 10);
    }
  };

*/
