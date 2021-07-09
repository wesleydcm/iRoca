import styled from "styled-components";

interface Props {
	color?: string;
}

export const StyledButton = styled.button<Props>`
	width: fit-content;
	height: 40px;
	padding: 0 20px;

	background: ${({ color }) =>
		!!color ? "var(--green-gradient)" : "var(--font-color)"};

	color: ${({ color }) => (!!color ? "var(--font-color)" : "var(--green400)")};

	border-radius: 7px;
	border: none;
	font-weight: ${({color}) => !!color? 600 : 500};
	font-size: 18px;
	text-transform: capitalize;
	text-align: center;
	font-family: var(--poppins);
	font-style: normal;

	&:hover {
		box-shadow: ${({ color }) =>
			!!color
				? "1px 2px 5px 2px var(--font-color)"
				: "1px 2px 5px 2px var(--green600)"};
	}

	&:active {
		transform: scale(0.95);
	}
`;
