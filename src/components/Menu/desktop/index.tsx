import { AsideContainer, MenuWrapper } from "./styles";
import { ReactComponent as Anounciments } from "../../../assets/images-mobile/anounciments.svg";
import { ReactComponent as Cart } from "../../../assets/images-mobile/cart.svg";
import { ReactComponent as MyAccount } from "../../../assets/images-mobile/my_account.svg";
import { ReactComponent as ExitSvg } from "../../../assets/images-desktop/bx_bx-exit.svg";
import { NavLink, useHistory } from "react-router-dom";
import { useUser } from "../../../providers/user";
import DialogModal from "../../Modal";
import { successToast } from "../../../utils";

const MenuDesktop = (): JSX.Element => {
	const history = useHistory();

	const { user } = useUser();

	const handleLogout = () => {
		localStorage.clear();
		history.push("/");
		successToast(`Até a próxima, ${user.personalData.name}!`);
		user.auth = false;
		user.token = "";
		console.log(user)
	};

	return (
		<AsideContainer>
			<MenuWrapper>
				<NavLink exact to="/" activeClassName="selected">
					<Anounciments />
					<span>Anúncios</span>
				</NavLink>
				<NavLink
					to="/mycart"
					activeClassName="selected"
					data-testid="linkToCart"
				>
					<Cart />
					<span>Carrinho</span>
				</NavLink>
				<NavLink to="/myaccount" activeClassName="selected">
					<MyAccount />
					<span>Minha Conta</span>
				</NavLink>
				{user && user.auth ? (
					<DialogModal
						action={handleLogout}
						title="sair"
						message="deseja realmente sair?"
						dataCss="exit-button"
					>
						<span>Sair da Conta</span> <ExitSvg />
					</DialogModal>
				) : (
					<button
						type="button"
						data-css="login-button"
						onClick={() => {
							history.push("/login");
						}}
					>
						<ExitSvg />
						<span>Entrar</span>
					</button>
				)}
			</MenuWrapper>
		</AsideContainer>
	);
};

export default MenuDesktop;
