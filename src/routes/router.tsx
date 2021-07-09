import { Route, Switch } from "react-router";
import LoginPage from "../pages/login";
import MyCart from "../pages/mycart";
import TestsPage from "../pages/testsPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={TestsPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route path="/mycart" component={MyCart} />
    </Switch>
  );
};

export default Routes;
