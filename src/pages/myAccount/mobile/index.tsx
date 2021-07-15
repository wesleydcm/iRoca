import {
  Title,
  ContainerButtons,
  BigContainer,
  NotAuthContainer,
  NotAuthText,
  Link,
} from "./styles";
import { useHistory } from "react-router-dom";
import { useUser } from "../../../providers/user";

import Button from "../../../components/Button";
import { NavLink } from "react-router-dom";
import DialogModal from "../../../components/Modal";

interface MyProfileProps {
  isAuth?: boolean;
}
const MyAccountPageMobile = ({ isAuth = true }: MyProfileProps) => {
  const history = useHistory();

  const { user } = useUser();

  const handleLogout = () => {
    localStorage.clear();
    user.auth = false;
    history.push("/");
  };

  return (
    <>
      {user && user.auth ? (
        <BigContainer>
          <Title>Minha Conta</Title>
          <ContainerButtons>
            <Link to={`/profile/${user.personalData.id}`}>
              <Button color={"green"}>Ver Perfil</Button>
            </Link>
            <Link to="/mypurchaseshistory">
              <Button color={"green"}>Histórico de compra</Button>
            </Link>
            <Link to="/myAccount/edit">
              <Button color={"green"}>Editar dados pessoais</Button>
            </Link>
            <Link to="/myAccount/products">
              <Button color={"green"}>Cadastrar produto</Button>
            </Link>
          </ContainerButtons>

          <DialogModal
            action={handleLogout}
            title="sair"
            message="deseja realmente sair?"
            dataCss="exit-button"
          >
            Sair da conta
          </DialogModal>
        </BigContainer>
      ) : (
        <NotAuthContainer>
          <Title>Minha Conta</Title>
          <NotAuthText>
            Você não está logado para ver detalhes da sua conta.
            <NavLink to="/login">
              <h3>
                Se deseja acessar essa funcionalidade, você pode entrar clicando
                aqui
              </h3>
            </NavLink>
          </NotAuthText>
        </NotAuthContainer>
      )}
    </>
  );
};

export default MyAccountPageMobile;
