import styled from "styled-components";

export const AsideContainer = styled.div`
	height: 100vh;
	width: 30vw;
	position: fixed;
	top: 0;
	left: 0;
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
	padding-top: 10vh;
	a {
		width: 100%;
		height: 8vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 2;
		transition: ease-in-out 1s;
		margin: 2vh 0;

		span {
			font-size: 1.2rem;
			color: var(--font-color);
			font-weight: 400;
			transition: color 500ms ease-out;
		}

		svg {
			width: 2.5vw;
			height: 2.5vw;
			margin-right: 20px;
			position: absolute;
			left: 6vw;
			transform: translateX(-30%);
			path {
				fill: var(--white);
				transition: fill 500ms ease-out;
			}
		}
		div[data-css="background"] {
			height: inherit;
			width: 96%;
			background-color: var(--white);
			position: absolute;
			right: -1px;
			z-index: -1;
			transform: scaleX(0);
			transform-origin: 50vh;
			border-top-left-radius: 2vw;
			border-bottom-left-radius: 2vw;
			transition: transform 300ms ease-out;

			::before,
			::after {
				content: "";
				width: 10%;
				height: 4vh;
				background-color: var(--green400);
				position: absolute;
				right: 0;
				z-index: -1;
			}
			::before {
				top: -50%;
				border-bottom-right-radius: 2vw;
			}
			div {
				width: 10%;
				height: 170%;
				position: absolute;
				top: -37%;
				right: 0;
				background-color: var(--white);
				z-index: -2;
				transition: transform 1ms;
			}
			::after {
				bottom: -50%;
				border-top-right-radius: 2vw;
			}
		}

		&.selected {
			span {
				color: var(--green400);
			}

			svg {
				fill: var(--green400);
				path {
					fill: var(--green400);
				}
			}
			div[data-css="background"] {
				transform: scaleY(1);
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
