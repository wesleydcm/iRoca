import { AsideContainer, MenuWrapper, ButtonLogoffOrEnter } from "./styles";
import { ReactComponent as Anounciments } from "../../../assets/images-mobile/anounciments.svg";
import { ReactComponent as Cart } from "../../../assets/images-mobile/cart.svg";
import { ReactComponent as MyAccount } from "../../../assets/images-mobile/my_account.svg";
import { ReactComponent as ExitSvg } from "../../../assets/images-desktop/bx_bx-exit.svg";
import { NavLink, useHistory } from "react-router-dom";
import { useUser } from "../../../Providers/user";

const MenuDesktop = (): JSX.Element => {
  const history = useHistory();

  const { user } = useUser();

  const handleLogout = () => {
    localStorage.clear();
    user.auth = false;
    history.push("/");
  };

  return (
    <AsideContainer>
      <MenuWrapper>
        <NavLink exact to="/" activeClassName="selected">
          <Anounciments />
          <span>Anúncios</span>
        </NavLink>
        <NavLink to="/cart" activeClassName="selected" data-testid="linkToCart">
          <Cart />
          <span>Carrinho</span>
        </NavLink>
        <NavLink to="/myaccount" activeClassName="selected">
          <MyAccount />
          <span>Minha Conta</span>
        </NavLink>
        <ButtonLogoffOrEnter onClick={() => handleLogout()}>
          <span>Sair da Conta</span> <ExitSvg />
          {/*isAuth?<span>Sair da Conta<span> <ExitSvg />:<span>Entrar</><EnterSvg/>*/}
        </ButtonLogoffOrEnter>
      </MenuWrapper>
    </AsideContainer>
  );
};

export default MenuDesktop;
