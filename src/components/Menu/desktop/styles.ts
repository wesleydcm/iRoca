import styled from "styled-components";
import menuSelected from "../../../assets/images-desktop/menu-selected-bg.svg";

export const AsideContainer = styled.div`
	height: 100vh;
	width: 30vw;
	min-height: 660px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 500;
	display: flex;
	flex-flow: column nowrap;
	background: var(--green400);
	font-family: var(--poppins);
	font-style: normal;
	align-items: center;

	@media only screen and (min-width: 1100px) {
		width: 25vw;
	}
`;

export const MenuWrapper = styled.nav`
	width: 100%;
	height: inherit;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	margin: 0;
	transition: 1s;
	padding-top: 3rem;
	svg {
		width: 3rem;
	}

	a {
		height: 95px;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 450;
		margin-right: 0px;
		transition: ease-in-out 1s;

		span {
			font-size: 18px;
			color: var(--font-color);
			font-weight: 400;
			display: flex;
			align-items: center;
		}

		svg {
			margin-right: 20px;
			path {
				fill: white;
			}
		}

		&.selected {
			background: url(${menuSelected});
			background-position: center;
			background-repeat: no-repeat;
			background-clip: border-box;
			background-size: cover;
			height: 174px;
			transition: 1s;
			span {
				color: var(--green400);
			}

			svg {
				fill: var(--green400);
				path {
					fill: var(--green400);
				}
			}
		}
	}

	button[data-css="exit-button"],
	button[data-css="login-button"] {
		width: 100%;
		height: 100px;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: var(--green300);
		font-family: var(--poppins);
		font-size: 18px;
		color: var(--font-color);
		outline: none;
		border: none;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		svg {
			margin-left: 15px;
		}
		&:hover {
			filter: brightness(0.9);
		}
	}
	button[data-css="login-button"] {
		svg {
			margin-right: 15px;
		}
	}
`;
