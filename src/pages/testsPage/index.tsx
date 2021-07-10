import { useState } from "react";
import Button from "../../Components/Button";
import DesktopInputIcon from "../../Components/InputIcon/desktop";
import Input from "../../Components/Input";
import ProductCardInCartHistory from "../../Components/ProductCardInCartHistory/desktop";
import ProductCardInCartHistoryMobile from "../../Components/ProductCardInCartHistory/mobile";
import ProductCardInAnnouncement from "../../Components/ProductCardInAnnouncement/desktop";
import ProductCardInAnnouncementMobile from "../../Components/ProductCardInAnnouncement/mobile";
import { ReactComponent as CloseSvg } from "../../assets/images-desktop/close.svg";
import { ReactComponent as SearchSvg } from "../../assets/images-desktop/search.svg";
import InputIconMobile from "../../Components/InputIcon/mobile";
import { WINDOW_SIZE_DESKTOP } from "../../utils";
import { useUser } from "../../Providers/user";
import RatingStars from "../../Components/RatingStars";
import { mockedProduct } from "../../utils/mocks";

const Test = () => {
	const [value, setValue] = useState<string>("");
	const [value2, setValue2] = useState<string>("");
	const [value3, setValue3] = useState<string>("");
	const [value4, setValue4] = useState<string>("");

	const { initController } = useUser();

	const clicked = (): void => {
		const controller = initController();
		controller.getEvaluationsOfUser(1).then(resp => {
			console.log(resp);
		});
	};

	return (
		<>
			<Button color="green" onClick={clicked}>
				Click me
			</Button>
			<RatingStars />
			<Button color="green">entrar</Button>
			<Button>sair</Button>
			{window.outerWidth > 899 ? (
				<>
					<DesktopInputIcon
						type="text"
						placeholder="nome"
						icon={CloseSvg}
						value={value}
						setValue={setValue}
					/>
					<DesktopInputIcon
						type="text"
						placeholder="buscar"
						icon={SearchSvg}
						action="search"
						color="white"
						value={value2}
						setValue={setValue2}
					/>
				</>
			) : (
				<>
					<InputIconMobile
						action="clear"
						placeholder="nome"
						icon={CloseSvg}
						value={value}
						setValue={setValue}
					/>
					<InputIconMobile
						placeholder="buscar"
						icon={SearchSvg}
						action="search"
						color="white"
						value={value2}
						setValue={setValue2}
					/>
				</>
			)}
			<Input
				type="text"
				placeholder="buscar"
				color="green"
				value={value3}
				setValue={setValue3}
			/>
			<Input
				type="text"
				placeholder="buscar"
				color="white"
				value={value4}
				setValue={setValue4}
			/>
			{window.innerWidth > WINDOW_SIZE_DESKTOP ? (
				<ProductCardInCartHistory scenery="cart" item={mockedProduct} />
			) : (
				<ProductCardInCartHistoryMobile
					scenery="history"
					item={mockedProduct}
				/>
			)}

			{window.innerWidth > WINDOW_SIZE_DESKTOP ? (
				<ProductCardInAnnouncement item={mockedProduct} />
			) : (
				<ProductCardInAnnouncementMobile item={mockedProduct} />
			)}
		</>
	);
};

export default Test;
