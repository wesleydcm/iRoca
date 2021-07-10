import { Route, Switch } from "react-router";
import LoginPage from "../pages/login/";
import TestsPage from "../pages/testsPage";
import ProductPage from "../pages/productPage";
import Home from "../pages/Home";
import MenuMobile from "../Components/Menu/mobile";
import MenuDesktop from "../Components/Menu/desktop";
import { useWindow } from "../Providers/window";
import { useLocation } from "react-router";

const Routes = () => {
  const { pageWidth } = useWindow();
  const { pathname } = useLocation();

  return (
    <>
      {!["/login", "/register"].includes(pathname) &&
        (pageWidth > 899 ? <MenuDesktop /> : <MenuMobile />)}

      <Switch>
        <Route exact path="/" component={TestsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home" component={Home} />
        {/* <Route path="/mycart" component={MyCart} /> */}
        <Route exact path="/product/:id" component={ProductPage} />
      </Switch>
    </>
  );
};

export default Routes;
