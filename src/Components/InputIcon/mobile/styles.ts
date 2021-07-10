import styled from "styled-components";
import type { IStyles } from "../../../@types";

interface Props {
	styles: IStyles;
}

export const Wrapper = styled.div<Props>`
	min-width: 200px;
	width: ${({ styles }) =>
		styles.width ? styles.width + "px" : "fit-content"};
	height: ${({ styles }) => styles.height + "px"};
	border: ${({ styles }) =>
		styles.color === "white"
			? "2px solid var(--font-color)"
			: "2px solid var(--green400)"};
	border-radius: 10px;
	padding: 0 15px;
	display: flex;
	align-items: center;

	button {
		border: none;
		display: inherit;
		align-items: inherit;
	}
`;

export const StyledInput = styled.input<Props>`
	width: 100%;
	height: 100%;
	background: transparent;
	margin-right: 5px;

	color: ${({ styles }) =>
		styles.color === "white" ? "var(--font-color)" : "var(--gray700)"};

	border: none;
	outline: none;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	text-transform: capitalize;
	text-align: left;
	font-family: var(--poppins);
	font-style: normal;

	&::placeholder {
		color: ${({ styles }) =>
			styles.color === "white" ? "var(--font-color)" : "var(--gray300)"};
	}
`;
