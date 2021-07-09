import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

export const Wrapper = styled.div`
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
	}

	figure {
		width: 55px;
		height: 55px;
		border-radius: 5px;
	}

	h2,
	h3 {
		font-family: var(--nunito);
		margin-left: 25px;
	}

	h2 {
		font-size: 10px;
		font-weight: 400;
		margin-bottom: 5px;
	}
	h3 {
		font-size: 9px;
		font-weight: 300;
	}
	div[data-css="statusWrapper"] {
		height: 100%;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: space-between;
		div:nth-child(1) {
			width: 100px;
			display: flex;
			flex-flow: column;
			align-items: flex-end;
			justify-content: flex-start;
			svg {
				width: 14px;
				height: 14px;
			}
		}

		div:nth-child(2) {
			justify-self: flex-end;
			span {
				font-family: var(--poppins);
				margin-left: 16px;
				font-weight: 500;
			}
		}
	}

	@media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
		width: 280px;
		height: 230px;
		padding: 30px 20px 0;
		flex-wrap: wrap;

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

		div[data-css="infoWrapper"] {
			width: 150px;
			h2,
			h3 {
				font-family: var(--nunito);
				margin: 0;
			}

			h2 {
				font-size: 18px;
			}
			h3 {
				font-size: 12px;
				margin-top: 10px;
				margin-bottom: 30px;
			}
		}
		div[data-css="statusWrapper"] {
			width: 100%;
			height: unset;
			flex-flow: row;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 15px;
			align-self: flex-end;

			svg {
				width: 25px;
				height: 25px;
			}

			justify-self: flex-end;
			span {
				font-family: var(--poppins);
				font-weight: 500;
			}
		}
	}
`;
