import styled, { keyframes } from "styled-components";

interface buttonActive {
	buttonActive: boolean;
}
const slideLeft = keyframes`
  from {
    left:-100px;
    opacity:0;
  }
  to {
    left:0px;
    opacity:1;
  }
`;
const AppearFromRight = keyframes`
  from {
    right:-100px;
    opacity:0;
  }
  to {
    right:0px;
    opacity:1;
  }
`;
const AppearFromCenter = keyframes`
  from {
    transform:0.6;
    opacity:0;
  }
  to {
    opacity:1;
  }
`;
export const Container = styled.main`
	font-family: var(--poppins);
	padding: 38px 24px 120px;
	display: flex;
	position: relative;
	width: 100%;
	min-height: 100vh;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	-webkit-font-smoothing: antialiased;
	-webkit-animation: ${slideLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	animation: ${slideLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const ContactContent = styled.section`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	animation: ${AppearFromCenter} 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	a {
		position: absolute;
		right: 24px;
		outline: none;
		border: none;
		svg {
			path {
				fill: var(--green400);
			}
		}
	}
	img {
		border-radius: 50%;
		margin-bottom: 12px;
		width: 40vw;
		height: 40vw;
	}
	h2 {
		font-size: 22px;
		color: var(--green400);
		margin-bottom: 2px;
	}
	h4 {
		font-size: 16px;
		font-weight: 500;
		font-style: normal;
		overflow: hidden;
		color: var(--gray700);
		margin-bottom: 2px;
	}
	h4 + h4 {
		margin-bottom: 16px;
	}
`;
export const ToggleRendering = styled.div<buttonActive>`
	width: 100%;
	display: flex;
	button {
		font-family: var(--poppins);
		font-weight: 700;
		font-size: 18px;
		outline: none;
		border: none;
		margin-bottom: 18px;
		color: ${({ buttonActive }) =>
			buttonActive ? `var(--green400)` : `var(--gray300)`};
	}

	button + button {
		margin-left: 12px;
		color: ${({ buttonActive }) =>
			!buttonActive ? `var(--green400)` : `var(--gray300)`};
	}
`;

export const EvaluationContent = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	animation: ${slideLeft} 0.5s ease-in-out;

	div {
		width: 100%;
	}

	div:nth-child(1) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 12px;
		margin-bottom: 8px;

		div {
			width: 60%;
			justify-content: flex-end;
		}

		h4 {
			padding-top: 4px;
		}
	}
`;
export const ProductContent = styled.section`
	width: 100%;
	flex-grow: auto;
	position: relative;
	animation: ${AppearFromRight} 0.5s ease-in-out;
	display: flex;
	flex-direction: column;
	gap: 12px;
	li {
		transition: transform 100ms ease-out;

		&:active {
			transform: scale(0.98);
			transition: transform 100ms ease-out;
		}

		&:hover {
			filter: brightness(0.95);
		}
	}
`;
