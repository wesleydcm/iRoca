import { Dispatch, SetStateAction } from "react";
import { StyledInput } from "./styles";

interface Props {
  type: string;
  placeholder: string;
  color?: "green" | "white";
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  width: number;
}

/**
	@param width define the component width 
*/

const Input = ({
  type,
  placeholder,
  value,
  setValue,
  ...rest
}: Props): JSX.Element => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...rest}
    />
  );
};

export default Input;
