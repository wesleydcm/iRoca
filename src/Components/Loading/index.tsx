import { Wrapper } from "./styles";
import { ReactComponent as LogoSvg } from "../../assets/images-mobile/logo.svg";

export interface Props {
	size: number;
}

const Loading = ({ ...rest }: Props): JSX.Element => {
	return (
		<Wrapper {...rest}>
			<div className="logo-cont">
				<LogoSvg />
			</div>
		</Wrapper>
	);
};

export default Loading;
