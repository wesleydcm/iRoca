import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Register2 from "../pages/Register/Register2";
import Register3 from "../pages/Register/Register3";
import TestsPage from "../pages/testsPage";
import MyAccountPageComponent from "../pages/myAccount";
import ProfilePage from "../pages/profile";
import UpdateProduct from "../pages/editProduct";
import Home from "../pages/Home";
import ProductPage from "../pages/productPage";
import MenuMobile from "../components/Menu/mobile";
import MenuDesktop from "../components/Menu/desktop";
import { useWindow } from "../providers/window";
import MyCart from "../pages/mycart";
import CreateProductPage from "../pages/createproduct";
import { useLocation } from "react-router";
import LoginPage from "../pages/login";
import EditProfile from "../pages/editProfile";
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
        <Route exact path="/myaccount" component={MyAccountPageComponent} />
        <Route exact path="/profile/:id" component={ProfilePage} />

        <Route
          path="/myaccount/profile/update-product/:id"
          component={UpdateProduct}
        />
        <Route path="/mycart" component={MyCart} />

        <Route exact path="/myaccount/products" component={CreateProductPage} />

        <Route path="/myAccount/edit" component={EditProfile} />
        <Route path="/editProfile">
          <div>Edit Profile</div>
        </Route>
        <Route path="/checkout">
          <div>Checkout</div>
        </Route>
      </Switch>
    </>
  );
};
export default RouterComponent;
