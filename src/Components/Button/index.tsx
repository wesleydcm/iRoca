import { DOMAttributes } from "react";
import { StyledButton } from "./styles";

interface Props extends DOMAttributes<any> {
  type?: "button" | "submit" | "reset" | undefined;
  color?: string;
  children: string;
}

const Button = ({ type = "button", children, ...rest }: Props): JSX.Element => {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
