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

	div[data-css="isReceivedWrapper"] {
		display: flex;
		align-items: center;
		span {
			font-weight: 600;
			color: var(--gray700);
			margin-right: 5px;
			font-size: 10px;
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
		width: 960px;
		height: fit-content;
		border-radius: 30px;
		padding: 40px;

		span[data-css="date"] {
			font-size: 24px;
		}

		div[data-css="seller__data"] {
			h3,
			div > span {
				font-size: 14px;
			}
			h3 {
				font-size: 20px;
			}

			h2 {
				margin-top: 12px;
				font-size: 20px;
			}
		}

		div[data-css="purchase__data"] {
			div > span {
				font-size: 22px;
			}
			span {
				font-size: 40px;
			}
		}

		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			li {
				margin-bottom: 15px;
			}
		}

		div[data-css="isReceivedWrapper"] {
			margin-left: auto;
			span {
				font-size: 18px;
			}
			svg {
				width: 65px;
				height: 65px;
			}
		}
	}
`;
