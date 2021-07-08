import { Dispatch, SetStateAction } from "react";
import { StyledInput, Wrapper } from "./styles";

interface Props {
	type: string;
	action?: "clear" | "search";
	placeholder: string;
	color?: "green" | "white";
	icon: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const MobileInputIcon = ({
	type,
	action = "clear",
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
			{action === "clear" ? (
				<button onClick={() => setValue("")}>
					{!!value.length && <Icon />}
				</button>
			) : (
				<button>
					<Icon />
				</button>
			)}
		</Wrapper>
	);
};

export default MobileInputIcon;
