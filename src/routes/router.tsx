import { Route, Switch } from "react-router";
import LoginPage from "../pages/login";
import TestsPage from "../pages/testsPage";
const RouterComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={TestsPage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  );
};

export default RouterComponent;
