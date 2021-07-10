import { Route, Switch } from "react-router";
import LoginPage from "../pages/login/";
import TestsPage from "../pages/testsPage";
import ProductPage from "../pages/productPage";
import Home from "../pages/Home";
import MenuMobile from "../Components/Menu/mobile";
import MenuDesktop from "../Components/Menu/desktop";
import { useWindow } from "../Providers/window";

const Routes = () => {
  const { pageWidth } = useWindow();

  return (
    <>
      {pageWidth > 899 && <MenuDesktop />}
      <Switch>
        <Route exact path="/" component={TestsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home" component={Home} />
        {/* <Route path="/mycart" component={MyCart} /> */}
        <Route exact path="/product/:id" component={ProductPage} />
      </Switch>
      {pageWidth < 900 && <MenuMobile />}
    </>
  );
};

export default Routes;
