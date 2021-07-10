import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";
import { StyledInput } from "./styles";

interface Props {
  type: string;
  placeholder: string;
  color?: "green" | "white";
  register?: UseFormRegister<FieldValues | FormValues> | undefined;
  name?: string | undefined;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

interface FormValues {
  email: string;
  // password: string;
  // emailConfirm: string;
  // passwordConfirm: string;
}

/**
	@param width define the component width 
*/

const Input = ({
  type,
  placeholder,
  value,
  setValue,
  register = undefined,
  name = undefined,
  ...rest
}: Props): JSX.Element => {
  return register !== undefined && name !== undefined ? (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      {...rest}
      {...register(name)}
    />
  ) : (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => !!setValue && setValue(e.target.value)}
    />
  );
};

export default Input;
