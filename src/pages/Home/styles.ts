import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

interface Props {
	isSelected: boolean;
}

export const LiStyled = styled.li<Props>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	margin-top: 15px;
	opacity: ${({ isSelected }) => (isSelected ? 1 : 0.4)};
	position: relative;
	transition: opacity 500ms ease-out;
	button {
		border: none;
	}
	svg {
		position: absolute;
		width: 8vw;
		height: 8.3vw;
		top: 0;
		right: 0;
		transform: translate(4vw, -4vw);
		z-index: 1;
	}
	span {
		text-transform: capitalize;
		font-weight: 600;
		color: var(--gray700);
		font-size: 0.75rem;
	}

	button > img {
		width: 23vw;
		height: 23vw;
		border-radius: 50%;
	}

	@media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
		svg {
			position: absolute;
			width: 2vw;
			height: 2vw;
			transform: translate(1vw, -1vw);
		}
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	margin-inline: auto;
	padding: 20px;
	padding-bottom: 120px;
	font-family: var(--poppins);

	svg[data-css="logo"] {
		width: 15vw;
		height: 15vw;
		path {
			stroke: var(--green400);
		}
		path:nth-child(3),
		path:nth-child(4) {
			fill: var(--green400);
		}
	}

	ul[data-css="filtersWrapper"] {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul[data-css="filtersWrapper"] {
		flex-wrap: wrap;
		margin-top: 15px;
	}

	> h3 {
		text-transform: capitalize;
		font-weight: 600;
		color: var(--gray700);
	}

	ul[data-css="filtersWrapper"] > li:nth-child(3) > button > img {
		border-radius: unset;
	}

	> h3 {
		font-size: 1.8rem;
		margin: 30px 0;
	}

	ul[data-css="productsWrapper"] {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		li + li {
			margin-top: 15px;
		}
	}

	@media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
		padding: 60px 40px;
		padding-left: 32vw;
		display: flex;
		flex-wrap: wrap;

		header {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			svg[data-css="logo"] {
				width: 8.7vw;
				height: 8.7vw;
				max-width: 125px;
				max-height: 125px;
			}
		}

		.fix-width {
			width: 45.9vw;
		}

		div[data-css="filtersContainer"],
		ul[data-css="filtersWrapper"],
		ul[data-css="filtersWrapper"] > li {
			display: flex;
		}
		ul[data-css="filtersWrapper"] {
			width: 100%;
		}
		div[data-css="filtersContainer"] {
			width: 100%;
			justify-content: space-between;
			ul:nth-child(1) {
				width: 31vw;
			}
			ul:nth-child(2) {
				width: 31vw;
			}
		}

		ul[data-css="filtersWrapper"] {
			margin-top: 10px;
		}

		ul[data-css="filtersWrapper"] > li {
			margin-top: 10px;
		}

		ul[data-css="filtersWrapper"] > li > span {
			font-size: 1.2rem;
		}

		ul[data-css="filtersWrapper"] > li > button > img {
			width: 9.5vw;
			height: 9.5vw;
			max-width: 125px;
			max-height: 125px;
		}
		ul[data-css="filtersWrapper"]:nth-child(2)
			> li:nth-child(3)
			> button
			> img {
			border-radius: 50%;
		}
		> h3 {
			width: 100%;
			font-size: 2.4rem;
			margin: 0;
			margin-top: 30px;
		}

		ul[data-css="productsWrapper"] {
			align-items: flex-end;
			justify-content: center;
			flex-direction: row;
			flex-wrap: wrap;

			li + li {
				margin-top: 30px;
				justify-self: flex-start;
			}
		}
		button {
			&:active {
				transform: scale(0.9);
			}
			transition: transform 100ms ease-out;
			outline: none;
		}
	}
	@media only screen and (min-width: 1100px) {
		padding-left: 27vw;
	}
`;
