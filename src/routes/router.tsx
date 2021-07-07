import { Route, Switch } from "react-router";

const RouterComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div>Home</div>
      </Route>
    </Switch>
  );
};

export default RouterComponent;
