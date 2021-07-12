import { Dispatch, SetStateAction } from "react";
import type { IStyles } from "../../../@types";
import { StyledInput, Wrapper } from "./styles";

interface Props {
  type?: string;
  styles: IStyles;
  action: "clear" | "search";
  placeholder?: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const InputIconMobile = ({
  styles,
  action,
  placeholder,
  icon: Icon,
  value,
  setValue,
  onClick = undefined,
  ...rest
}: Props): JSX.Element => {
  return (
    <Wrapper styles={styles}>
      <StyledInput
        placeholder={placeholder}
        styles={styles}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
      {action === "clear" ? (
        <button onClick={() => setValue("")}>
          {!!value.length && <Icon />}
        </button>
      ) : (
        <button onClick={onClick}>
          <Icon />
        </button>
      )}
    </Wrapper>
  );
};

export default InputIconMobile;
