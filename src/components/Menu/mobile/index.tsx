import { MenuContainer, MenuWrapper } from "./styles";
import { ReactComponent as Announcements } from "../../../assets/images-mobile/announcements.svg";
import { ReactComponent as Cart } from "../../../assets/images-mobile/cart.svg";
import { ReactComponent as MyAccount } from "../../../assets/images-mobile/my_account.svg";
import { NavLink } from "react-router-dom";

const MenuMobile = (): JSX.Element => {

  return (
    <MenuContainer>
      <MenuWrapper>
        <NavLink exact to="/" activeClassName="selected">
          <Announcements />
          <span>Anúncios</span>
        </NavLink>
        <NavLink to="/mycart" activeClassName="selected" data-testid="linkToCart">
          <Cart />
          <span>Carrinho</span>
        </NavLink>
        <NavLink to="/myaccount" activeClassName="selected">
          <MyAccount />
          <span>Minha Conta</span>
        </NavLink>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default MenuMobile;
