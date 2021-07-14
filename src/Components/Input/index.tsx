import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";
import { StyledInput } from "./styles";

interface Props {
  type: string;
  placeholder: string;
  color?: "green" | "white";
  register?: UseFormRegister<FieldValues> | undefined;
  name?: string | undefined;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  defaultValue?: string;
  width?: number;
}

// interface FormValues {
//   email: string;
//   // password: string;
//   // emailConfirm: string;
//   // passwordConfirm: string;
// }

/**
	@param width define the component width 
*/

const Input = ({
  type,
  placeholder,
  value,
  color,
  setValue,
  register = undefined,
  name = undefined,
  defaultValue = "",
  ...rest
}: Props): JSX.Element => {
  return register !== undefined && name !== undefined ? (
    <StyledInput
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      {...rest}
      {...register(name)}
      color={color}
    />
  ) : (
    <StyledInput
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onChange={(e) => !!setValue && setValue(e.target.value)}
    />
  );
};

export default Input;
