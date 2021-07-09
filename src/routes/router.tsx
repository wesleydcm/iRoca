import { Route, Switch } from "react-router";
<<<<<<< HEAD
import LoginPage from "../pages/login/";
=======
import LoginPage from "../pages/login";
// import MyCart from "../pages/mycart";
>>>>>>> efb2ab02f7061f6d86a2713cbc33ea8ec6236520
import TestsPage from "../pages/testsPage";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={TestsPage} />
      <Route exact path="/login" component={LoginPage} />
			<Route exact path="/home" component={Home} />
      {/* <Route path="/mycart" component={MyCart} /> */}
    </Switch>
  );
};

export default Routes;
