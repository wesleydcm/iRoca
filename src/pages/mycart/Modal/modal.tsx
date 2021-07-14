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

  const goToAnnoucements = () => {
    toggleModal();
    history.push("/")
  }

  return (
    <Container>
      <div className="bg"></div>
      <Modal>
        {product.length ? (
         <div className="informationNo">
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
        </div>)
        : 
        (
         <div className="informationYes">
          <p>
            Compra realizada sucesso. Voltar para Anúncios?
          </p>
         </div>
        )}

        <div className="btn">
          <Button color="green" onClick={goToAnnoucements}>
            Voltar
          </Button>
        </div>
        <IoMdCloseCircle className="close" onClick={toggleModal} />
      </Modal>
    </Container>
  );
};

export default AddToCartComponent;
