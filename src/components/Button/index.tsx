import { DOMAttributes } from "react";
import { StyledButton } from "./styles";

interface Props extends DOMAttributes<any> {
  type?: "button" | "submit" | "reset" | undefined;
  color?: "green" | undefined;
  children: string;
  width?: number;
}

/**
	@param width define the component width 
*/

const Button = ({ type = "button", children, ...rest }: Props): JSX.Element => {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
