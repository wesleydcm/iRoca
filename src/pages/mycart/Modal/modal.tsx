import { Container, Modal } from "./modalstyles";
import Button from "../../../components/Button";
import { IoMdCloseCircle } from "react-icons/io";
import { IProduct } from "../../../@types";
import { useHistory } from "react-router-dom";
import { useCart } from "../../../providers/cart";

interface Props {
  toggleModal: () => void;
  product: IProduct[];
  checkUser: boolean;
}

const AddToCartComponent = ({ toggleModal, product, checkUser }: Props) => {
  
  const history = useHistory();
  
  const { setCart } = useCart();

  const goToAnnoucements = () => {
    toggleModal();
    history.push("/")
    setCart([]);
  }

  console.log(product)
  return (
    <Container>
      <div className="bg"></div>
      <Modal>
        {(product.length) ? (
          <div className="informationTwo">
            <p>
              A compra não foi finalizada porque não há estoque suficiente do(s)
              produto(s) abaixo:
            </p>
            <ul>
              {product.map((elem) => {
                return (
                  <li key={elem.id}>
                    {elem.name} - Estoque atual: {elem.qty} kg
                  </li>
                );
              })}
            </ul>
          </div>
         )
        : (!product.length && !checkUser) ?
        (
          <div className="informationOne">
            <p>
              Compra não realizada. Um produtor não pode comprar seus próprios produtos.
            </p>
          </div>
        )
        :
        (
          <div className="informationOne">
            <p>
              Compra realizada com sucesso. Voltar para Anúncios?
            </p>
          </div>
        )
        }

        <div className="btn">
          <Button color="green" onClick={goToAnnoucements}>
            Voltar
          </Button>
        </div>
        <IoMdCloseCircle className="close" onClick={goToAnnoucements} />
      </Modal>
    </Container>
  );
};

export default AddToCartComponent;


