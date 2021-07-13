import { Route, Switch } from "react-router";
import LoginPage from "../pages/login/";
import TestsPage from "../pages/testsPage";
import MyAccountPageComponent from "../pages/myAccount";
import ProductPage from "../pages/productPage";
import ProfilePage from "../pages/myprofile";
import Home from "../pages/Home";
import MenuMobile from "../Components/Menu/mobile";
import MenuDesktop from "../Components/Menu/desktop";
import { useWindow } from "../Providers/window";
import { useLocation } from "react-router";
import { WINDOW_SIZE_DESKTOP } from "../utils";
import MyPurchasesHistory from "../pages/MyPurchasesHistory";

const RouterComponent = () => {
	const { pageWidth } = useWindow();
	const { pathname } = useLocation();
	return (
		<>
			{!["/login", "/register"].includes(pathname) &&
				(pageWidth > WINDOW_SIZE_DESKTOP ? <MenuDesktop /> : <MenuMobile />)}

			<Switch>
				<Route exact path="/" component={TestsPage} />
				<Route path="/login" component={LoginPage} />

				<Route path="/home" component={Home} />
				<Route path="/product/:id" component={ProductPage} />

				<Route path="/mypurchaseshistory" component={MyPurchasesHistory} />
				<Route path="/register">
					<div>Register</div>
				</Route>

				<Route path="/myCart">
					<div>My Cart</div>
				</Route>

				<Route path="/checkout">
					<div>Checkout</div>
				</Route>

				<Route path="/myAccount" component={MyAccountPageComponent}></Route>

				<Route path="/myAccount/profile" component={ProfilePage} />

				<Route path="/myAccount/edit">
					<div>Edit Profile</div>
				</Route>

				<Route path="/myAccount/history">
					<div>My Purchase History</div>
				</Route>

				<Route path="/myAccount/products">
					<div>Register Products</div>
				</Route>

				<Route path="/myAccount/profile/product">
					<div>Update Product</div>
				</Route>

				<Route path="/product">
					<div>Product</div>
				</Route>

				<Route path="/ownerProfile/:id">
					<div>Owner Profile</div>
				</Route>
			</Switch>
		</>
	);
};

export default RouterComponent;
