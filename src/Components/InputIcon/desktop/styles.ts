import styled from "styled-components";

interface Props {
	color: "green" | "white";
}

export const Wrapper = styled.div`
	min-width: 200px;
	width: fit-content;
	height: 35px;
	border: ${({ color }) =>
		color === "white"
			? "2px solid var(--font-color)"
			: "2px solid var(--green400)"};
	border-radius: 10px;
	padding: 0 15px;
	display: flex;
	align-items: center;

	button {
		border: none;
	}
`;

export const StyledInput = styled.input<Props>`
	width: 100%;
	height: 100%;
	background: transparent;
	margin-right: 5px;

	color: ${({ color }) =>
		color === "white" ? "var(--font-color)" : "var(--gray700)"};

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
		color: ${({ color }) =>
			color === "white" ? "var(--font-color)" : "var(--gray300)"};
	}
`;
