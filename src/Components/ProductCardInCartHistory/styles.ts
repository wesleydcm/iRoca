import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

interface Prop {
	scenery: "cart" | "history";
}

export const Wrapper = styled.li<Prop>`
	width: 100%;
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
	padding: 10px;

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
			position: absolute;
			top: 10px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			max-width: 45vw;
			font-size: 0.9rem;
			font-weight: 500;
			margin-bottom: 5px;
		}
		h3 {
			font-size: 1.5rem;
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
			font-size: 0.8rem;
			font-family: var(--poppins);
			font-weight: 500;
		}
	}

	@media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
		width: 280px;
		height: 230px;
		flex-wrap: wrap;
		padding: 20px;

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
				top: 20px;
				font-size: 1.2rem;
				font-weight: bold;
				max-width: 60%;
			}
			h3 {
				font-size: 2rem;
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
