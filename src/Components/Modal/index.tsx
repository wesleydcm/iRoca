import { Ref, forwardRef, ReactElement, useState, ReactNode } from "react";
import Button from "../../Components/Button";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { Wrapper, StyledDialog } from "./styles";

interface Props {
	title: string;
	message: string;
	options?: string[];
	action: () => void;
	children: ReactNode;
	dataCss?: string;
	"data-testid"?: string;
}

const Transition = forwardRef(function Transition(
	props: TransitionProps & { children?: ReactElement<any, any> },
	ref: Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

/**
 * It's the Iroça dialog modal.
 * @prop {string} `title` The dialog title.
 * @prop {string} `message` the dialog message.
 * @prop {(function)} `action` A function to be executed after the click on "left" button.
 * @prop {ReactNode} `children` A ReactNode to be rendered like the modal activator component.
 * @prop {string[]} `options?` An array to replace de default buttons texts.
 * @prop {string} `dataCss?` A string value that could be used to style this children above.
 * @prop {string} `data-testid?` A key destined to jest tests proposal.
 */

const DialogModal = ({
	title,
	message,
	action,
	children,
	options = ["sim", "não"],
	dataCss,
	...rest
}: Props): JSX.Element => {
	const [open, setOpen] = useState<boolean>(false);

	const handleClose = () => {
		action();
		setOpen(false);
	};

	return (
		<Wrapper {...rest}>
			<button data-css={dataCss} onClick={() => setOpen(true)}>
				{children}
			</button>

			<StyledDialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby={title}
				aria-describedby={message}
			>
				<h2>{title}</h2>

				<p>{message}</p>

				<div data-css="navigation">
					<Button onClick={handleClose} color="green">
						{options[0]}
					</Button>
					<Button onClick={() => setOpen(false)}>{options[1]}</Button>
				</div>
			</StyledDialog>
		</Wrapper>
	);
};

export default DialogModal;
