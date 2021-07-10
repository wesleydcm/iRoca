import { Route, Switch } from "react-router";
import LoginPage from "../pages/login";
// import MyCart from "../pages/mycart";
import TestsPage from "../pages/testsPage";
import HomeMobile from "../pages/Home/mobile";
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
				<Route exact path="/home" component={HomeMobile} />
				{/* <Route path="/mycart" component={MyCart} /> */}
			</Switch>
			{pageWidth < 900 && <MenuMobile />}
		</>
	);
};

export default Routes;
