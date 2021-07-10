import { Route, Switch } from "react-router";
import LoginPage from "../pages/login/";
import TestsPage from "../pages/testsPage";
import Home from "../pages/Home";
import ProductPage from "../pages/productPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={TestsPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/product/:id" component={ProductPage} />
      {/* <Route path="/mycart" component={MyCart} /> */}
    </Switch>
  );
};

export default Routes;
