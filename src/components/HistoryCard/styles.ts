import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

interface Props {
	isReceived: boolean;
}

export const Wrapper = styled.li<Props>`
	width: 90%;
	height: fit-content;
	position: relative;
	box-shadow: 0 2px 5px 2px var(--shadow-black);
	margin-inline: auto;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	overflow: hidden;
	padding: 20px;
	font-family: var(--poppins);

	div[data-css="seller__data"] {
		h3,
		div > span {
			font-weight: 600;
			color: var(--gray700);
		}
		span {
			font-size: 0.8rem;
		}

		h2 {
			font-weight: 700;
			font-size: 1rem;
			color: var(--green400);
			margin-bottom: 20px;
		}
	}
	span[data-css="date"] {
		position: absolute;
		right: 20px;
		font-weight: 600;
		font-size: 0.8rem;
		color: var(--green400);
		align-self: flex-start;
	}

	ul {
		width: 100%;
		li {
			margin: 10px 0;
		}
		li:last-child {
			margin-bottom: 15px;
		}
	}

	button[data-css="isReceivedWrapper"] {
		display: flex;
		align-items: center;
		border: none;
font-family: var(--poppins);
		span {
			font-weight: 600;
			color: var(--gray700);
			margin-right: 5px;
			font-size: 0.8rem;
		}
		svg {
			opacity: ${({ isReceived }) => (isReceived ? 1 : 0.5)};
		}
	}

	div[data-css="purchase__data"] {
		font-weight: 600;
		text-align: right;

		div > span {
			color: var(--gray700);
			font-size: 0.9rem;
		}
		span {
			color: var(--green400);
			font-size: 1.6rem;
		}
	}

	@media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
		height: fit-content;
		border-radius: 30px;
		padding: 40px;

		span[data-css="date"] {
			font-size: 24px;
		}

		div[data-css="seller__data"] {

			h2 {
				margin-top: 12px;
				font-size: 20px;
			}
		}

		div[data-css="purchase__data"] {
			div > span {
				font-size: 1.2rem;
			}
			span {
				font-size: 1.8rem;
			}
		}

		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			
			li {
				margin: 1rem;
			
			}
		}

		div[data-css="isReceivedWrapper"] {
			margin-left: auto;
			span {
				font-size: 1rem;
			}
			svg {
				width: 50px;
				height: 50px;
			}
		}
	}
`;
