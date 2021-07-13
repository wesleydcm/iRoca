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
import { useWindow } from "../Providers/window";
import { useLocation } from "react-router";
import UpdateProfile from "../pages/editProfile";
import LoginPage from "../pages/login";
import { WINDOW_SIZE_DESKTOP } from "../utils";
import MyPurchasesHistory from "../pages/MyPurchasesHistory";
import { useUser } from "../Providers/user";

const RouterComponent = () => {
  const { pageWidth } = useWindow();
  const { pathname } = useLocation();
  const { user } = useUser();

  // const auth = ["/myaccount"];
  // const rest = ["/login", "/register", "/register-second", "/register-third"];

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

        <Route path="/myAccount" component={MyAccountPageComponent} />

        <Route path="/myAccount/profile:id" component={ProfilePage} />

        <Route path="/myCart">
          <div>My Cart</div>
        </Route>

        <Route path="/checkout">
          <div>Checkout</div>
        </Route>

        <Route path="/myAccount/edit">
          <div>Edit Profile</div>
        </Route>

        <Route path="/myAccount/history">
          <div>My Purchase History</div>
        </Route>

        <Route path="/myAccount/products">
          <div>Register Products</div>
        </Route>

        <Route path="/myAccount/profile/product">
          <div>Update Product</div>
        </Route>

        <Route path="/ownerProfile/:id">
          <div>Owner Profile</div>
        </Route>
      </Switch>
    </>
  );
};
export default RouterComponent;
