import { Wrapper } from "./styles";
import { ReactComponent as LogoSvg } from "../../assets/images-mobile/logo.svg";
import { ReactComponent as SearchSvg } from "../../assets/images-desktop/search.svg";
import InputIconMobile from "../../Components/InputIcon/mobile";
import { useState } from "react";

const HomeMobile = () => {
	const [searchValue, setSearchValue] = useState<string>("");

	return (
		<Wrapper>
			<LogoSvg data-css="logo" />
			<InputIconMobile action="search" value={searchValue} setValue={setSearchValue} icon={SearchSvg}/>
		</Wrapper>
	);
};

export default HomeMobile;
