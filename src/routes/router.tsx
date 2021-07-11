import { Route, Switch } from "react-router";
import LoginPage from "../pages/login";
import TestsPage from "../pages/testsPage";
import MyProfilePage from "../pages/myProfile";
const RouterComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={TestsPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/myaccount" component={MyProfilePage} />
    </Switch>
  );
};

export default RouterComponent;
