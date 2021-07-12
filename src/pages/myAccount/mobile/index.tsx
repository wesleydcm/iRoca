import {
  Title,
  ContainerButtons,
  LeaveButton,
  LeaveContainer,
  BigContainer,
  NotAuthContainer,
  NotAuthText,
} from "./styles";

import Button from "../../../Components/Button";
import { NavLink, useHistory } from "react-router-dom";
interface MyProfileProps {
  isAuth?: boolean;
}
const MyAccountPage = ({ isAuth = true }: MyProfileProps) => {
  const history = useHistory();
  return (
    <>
      {isAuth ? (
        <BigContainer>
          <Title>Minha Conta</Title>
          <ContainerButtons>
            <Button color={"green"}>Ver Perfil</Button>
            <Button color={"green"}>Histórico de compra</Button>
            <Button color={"green"}>Editar dados pessoais</Button>
            <Button color={"green"}>Cadastrar produto</Button>
          </ContainerButtons>{" "}
          <LeaveContainer>
            <LeaveButton>Sair da conta</LeaveButton>
          </LeaveContainer>
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

export default MyAccountPage;
