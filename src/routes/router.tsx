import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Register2 from "../pages/Register/Register2";
import Register3 from "../pages/Register/Register3";
import TestsPage from "../pages/testsPage";
import MyAccountPageComponent from "../pages/myAccount";
import ProfilePage from "../pages/profile";
import Home from "../pages/Home";
import ProductPage from "../pages/productPage";
import MenuMobile from "../Components/Menu/mobile";
import MenuDesktop from "../Components/Menu/desktop";
import MyCart from "../pages/mycart";
import CreateProductPage from "../pages/createproduct";
import { useWindow } from "../Providers/window";
import { useLocation } from "react-router";
import LoginPage from "../pages/login";
import { WINDOW_SIZE_DESKTOP } from "../utils";
import MyPurchasesHistory from "../pages/MyPurchasesHistory";

const RouterComponent = () => {
  const { pageWidth } = useWindow();
  const { pathname } = useLocation();
  return (
    <>
      {!["/login", "/register", "/register-second", "/register-third"].includes(
        pathname
      ) && (pageWidth > WINDOW_SIZE_DESKTOP ? <MenuDesktop /> : <MenuMobile />)}

      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/login" component={LoginPage} />

        <Route path="/product/:id" component={ProductPage} />

        <Route path="/mypurchaseshistory" component={MyPurchasesHistory} />

        <Route path="/register" component={Register} />

        <Route path="/register-second" component={Register2} />

        <Route path="/register-third" component={Register3} />

        <Route path="/test-page" component={TestsPage} />

        <Route exact path="/myAccount" component={MyAccountPageComponent} />

        <Route exact path="/myAccount/profile:id" component={ProfilePage} />

        <Route path="/mycart" component={MyCart} />

        <Route exact path="/myaccount/products" component={CreateProductPage} />

        <Route path="/register-third">
          <Register3 />
        </Route>

        <Route path="/checkout">
          <div>Checkout</div>
        </Route>

        <Route path="/myAccount/profile" component={ProfilePage} />

        <Route path="/myAccount/edit">
          <div>Edit Profile</div>
        </Route>

        <Route path="/ownerProfile/:id">
          <div>Owner Profile</div>
        </Route>
      </Switch>
    </>
  );
};
export default RouterComponent;
