import { Dispatch, SetStateAction } from "react";
import type { IStyles } from "../../../@types";
import { StyledInput, Wrapper } from "./styles";

interface Props {
	type?: string;
	styles: IStyles;
	action?: "search" | undefined;
	placeholder?: string;
	icon: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const InputIconDesktop = ({
	styles,
	action,
	placeholder,
	icon: Icon,
	value,
	setValue,
	...rest
}: Props): JSX.Element => {
	return (
		<Wrapper className="fix-width" styles={styles}>
			<StyledInput
				placeholder={placeholder}
				styles={styles}
				value={value}
				onChange={e => setValue(e.target.value)}
				{...rest}
			/>
			{action === "search" && (
				<button>
					<Icon />
				</button>
			)}
		</Wrapper>
	);
};

export default InputIconDesktop;
