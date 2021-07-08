import React, { useState } from "react";
import Button from "./Components/Button";
import MobileInputIcon from "./Components/InputIcon/mobile";
import DesktopInputIcon from "./Components/InputIcon/desktop";
import { ReactComponent as IrocaLogo } from "./assets/images-mobile/logo.svg";
import { ReactComponent as CloseSvg } from "./assets/images-desktop/close.svg";
import { ReactComponent as SearchSvg } from "./assets/images-desktop/search.svg";
const App: React.FC = () => {
	const [value, setValue] = useState<string>("");
	const [value2, setValue2] = useState<string>("");

	return (
		<>
			<IrocaLogo />
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
					<MobileInputIcon
						type="text"
						placeholder="nome"
						icon={CloseSvg}
						value={value}
						setValue={setValue}
					/>
					<MobileInputIcon
						type="text"
						placeholder="buscar"
						icon={SearchSvg}
						action="search"
						color="white"
						value={value2}
						setValue={setValue2}
					/>
				</>
			)}
		</>
	);
};

export default App;
