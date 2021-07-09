import { Route, Switch } from "react-router";
import LoginPage from "../pages/login";
// import MyCart from "../pages/mycart";
import TestsPage from "../pages/testsPage";
import HomeMobile from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={TestsPage} />
      <Route exact path="/login" component={LoginPage} />
			<Route exact path="/home" component={HomeMobile} />
      {/* <Route path="/mycart" component={MyCart} /> */}
    </Switch>
  );
};

export default Routes;
