import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

interface Prop {
	scenery: "cart" | "history";
}

export const Wrapper = styled.div<Prop>`
	width: 90%;
	height: 95px;
	position: relative;
	box-shadow: 0 2px 5px 2px var(--shadow-black);
	margin-inline: auto;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: nowrap;
	overflow: hidden;
	padding: 15px 15px 8px 25px;

	.organicFlag {
		width: 40px;
		height: 22px;
		position: absolute;
		top: 0px;
		left: -5px;
		margin: 0;
	}

	figure {
		width: 55px;
		height: 55px;
		border-radius: 5px;
	}

	h2,
	h3 {
		font-family: var(--poppins);
		margin-left: 25px;
	}
	div {
		width: 70%;
		h2 {
			font-size: 10px;
			font-weight: 500;
			margin-bottom: 5px;
		}
		h3 {
			font-size: 24px;
			font-weight: 500;
		}
	}
	div[data-css="statusWrapper"] {
		height: 100%;
		width: 30%;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: ${({ scenery }) =>
			scenery === "cart" ? "space-between" : "flex-end"};

		button {
			border: none;
			align-self: flex-end;
			svg {
				width: 20px;
				height: 20px;
			}
		}

		span {
			align-self: flex-end;
			font-size: 10px;
			font-family: var(--poppins);
			font-weight: 500;
		}
	}

	@media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
		width: 280px;
		height: 230px;
		flex-wrap: wrap;
		padding: 30px 20px 15px;

		.organicFlag {
			width: 55px;
			height: 35px;
			left: -6px;
			svg {
				width: inherit;
				height: inherit;
			}
		}

		figure {
			width: 66px;
			height: 66px;
			align-self: flex-start;
		}

		h2,
		h3 {
			font-family: var(--nunito);
			margin: 0;
		}
		div {
			width: 70%;
			h2 {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 5px;
			}
			h3 {
				font-size: 32px;
				font-weight: bold;
				color: var(--gray600);
			}
		}
		div[data-css="statusWrapper"] {
			height: unset;
			width: 100%;
			flex-flow: row;
			align-self: flex-end;

			button {
				svg {
					width: 25px;
					height: 25px;
				}
			}

			span {
				font-size: 16px;
			}
		}
	}
`;
