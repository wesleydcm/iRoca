import { Route, Switch } from "react-router";
import LoginPage from "../pages/login";
import TestsPage from "../pages/testsPage";
import Home from "../pages/Home";
const RouterComponent = () => {
	return (
		<Switch>
			<Route exact path="/" component={TestsPage} />
			<Route exact path="/login" component={LoginPage} />
			<Route exact path="/home" component={Home} />
		</Switch>
	);
};

export default RouterComponent;
