import {
  Title,
  ContainerButtons,
  BigContainer,
  NotAuthContainer,
  NotAuthText,
  Link,
} from "./styles";
import { useUser } from "../../../Providers/user";
import Button from "../../../Components/Button";
import { NavLink } from "react-router-dom";

interface MyProfileProps {
  isAuth?: boolean;
}
const MyAccountPageDesktop = ({ isAuth = true }: MyProfileProps) => {
  const { user } = useUser();

  return (
    <>
      {user && user.auth ? (
        <BigContainer>
          <Title>Minha Conta</Title>
          <ContainerButtons>
            <Link to={`/myAccount/profile/${user.personalData.id}`}>
              <Button color={"green"}>Ver Perfil</Button>
            </Link>
            <Link to="/myAccount/history">
              <Button color={"green"}>Histórico de compra</Button>
            </Link>
            <Link to="/myAccount/edit">
              <Button color={"green"}>Editar dados pessoais</Button>
            </Link>
            <Link to="/myAccount/products">
              <Button color={"green"}>Cadastrar produto</Button>
            </Link>
          </ContainerButtons>
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

export default MyAccountPageDesktop;
