import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

interface Props {
	isReceived: boolean;
}

export const Wrapper = styled.div<Props>`
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
		h3 {
			font-size: 11px;
		}

		h2 {
			font-weight: 700;
			font-size: 12px;
			color: var(--green400);
			margin-bottom: 20px;
		}
	}
	span[data-css="date"] {
		font-weight: 600;
		font-size: 14px;
		color: var(--green400);
		align-self: flex-start;
	}

	ul {
		width: 100%;
		li {
			margin: 5px 0;
		}
	}

	div[data-css="isReceivedWrapper"] {
		display: flex;
		align-items: center;
		span {
			font-weight: 600;
			color: var(--gray700);
			margin-right: 5px;
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
			font-size: 12px;
		}
		span {
			color: var(--green400);
			font-size: 24px;
		}
	}

	@media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {

	}
`;
