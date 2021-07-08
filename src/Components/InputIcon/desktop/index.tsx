import { Dispatch, SetStateAction } from "react";
import { StyledInput, Wrapper } from "./styles";

interface Props {
	type: string;
	action?: "search" | undefined;
	placeholder: string;
	color?: "green" | "white";
	icon: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const DesktopInputIcon = ({
	type,
	action,
	placeholder,
	icon: Icon,
	color = "green",
	value,
	setValue,
	...rest
}: Props): JSX.Element => {
	return (
		<Wrapper color={color}>
			<StyledInput
				type={type}
				placeholder={placeholder}
				color={color}
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

export default DesktopInputIcon;
