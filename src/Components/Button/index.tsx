import { StyledButton } from "./styles";

interface Props {
	type: string;
	value: string;
	color?: string;
}

const Button = ({ type, value, ...rest }: Props): JSX.Element => {
	return <StyledButton type={type} value={value} {...rest} />;
};

export default Button;
