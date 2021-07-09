import styled from "styled-components";
import { Props } from ".";

export const Wrapper = styled.div<Props>`
	.logo-cont,
	.logo-cont::before,
	.logo-cont::after {
		border-radius: 50%;
		background: var(--green400);
	}

	.logo-cont {
		width: ${({ size }) => size + "px"};
		height: ${({ size }) => size + "px"};
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			width: ${({ size }) => size * 0.7 + "px"};
			height: ${({ size }) => size * 0.7 + "px"};
		}
	}

	.logo-cont::before,
	.logo-cont::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		border: solid 2px var(--green400);
		top: -2px;
		left: -2px;
		animation: grow 1s 1.5s infinite ease-out;
	}

	.logo-cont::before {
		z-index: -1;
	}

	.logo-cont::after {
		z-index: -2;
	}

	@keyframes grow {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			transform: scale(1.5);
			opacity: 0;
		}
	}
`;
