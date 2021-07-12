import { MenuContainer, MenuWrapper } from "./styles";
import { ReactComponent as Anounciments } from "../../../assets/images-mobile/anounciments.svg";
import { ReactComponent as Cart } from "../../../assets/images-mobile/cart.svg";
import { ReactComponent as MyAccount } from "../../../assets/images-mobile/my_account.svg";

import { NavLink, useHistory } from "react-router-dom";

const MenuMobile = (): JSX.Element => {
  const history = useHistory();

  const handleClick = () => {
    // history.push("/");
    /*if(isAuth){
      userLogoff()
      history.push("/");
    }else{
      history.push("/login")
    }*/
  };

  return (
    <MenuContainer>
      <MenuWrapper>
        <NavLink to="/home" activeClassName="selected">
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
      </MenuWrapper>
    </MenuContainer>
  );
};

export default MenuMobile;
