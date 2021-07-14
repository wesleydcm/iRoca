import styled from "styled-components";
import { Props } from ".";

export const Wrapper = styled.div<Props>`
	.loading,
	.loading::before,
	.loading::after {
		border-radius: 50%;
		background: var(--green400);
	}

	.loading {
		width: ${({ size }) => size + "px"};
		height: ${({ size }) => size + "px"};
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			z-index: 1;
			width: ${({ size }) => `${size * 0.7}px`};
			height: ${({ size }) => `${size * 0.7}px`};
		}
		span {
			position: absolute;
			top: ${({ size }) => `${size + 20}px`};
		}
	}

	.loading::before,
	.loading::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		border: solid 2px var(--green400);
		top: -2px;
		left: -2px;
	}

	.loading::before {
		animation: grow 800ms 1.3s infinite ease-out;
	}

	.loading::after {
		animation: grow 800ms 0.6s infinite ease-out;
	}

	@keyframes grow {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			transform: scale(1.4);
			opacity: 0;
		}
	}
`;
