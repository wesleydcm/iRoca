import { Container, Modal } from "./modalstyles";
import Button from "../../../components/Button";
import { IoMdCloseCircle } from "react-icons/io";
import { ICart, IProduct } from "../../../@types";
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

  const goToAnnouncements = () => {
    toggleModal();
    history.push("/")
    setCart({} as ICart);
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
          <Button color="green" onClick={goToAnnouncements}>
            Voltar
          </Button>
        </div>
        <IoMdCloseCircle className="close" onClick={goToAnnouncements} />
      </Modal>
    </Container>
  );
};

export default AddToCartComponent;
