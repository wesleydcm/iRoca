import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

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

	ul[data-css="filtersWrapper"],
	ul[data-css="filtersWrapper"] > li {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul[data-css="filtersWrapper"] {
		flex-wrap: wrap;
		margin-top: 15px;
	}

	ul[data-css="filtersWrapper"] > li {
		flex-direction: column;
		margin-top: 15px;
	}

	ul[data-css="filtersWrapper"] > li > button {
		border: none;
	}

	> h3,
	ul[data-css="filtersWrapper"] > li > span {
		text-transform: capitalize;
		font-weight: 600;
		color: var(--gray700);
	}

	ul[data-css="filtersWrapper"] > li > span {
		font-size: 0.75rem;
	}

	ul[data-css="filtersWrapper"] > li > button > img {
		width: 23vw;
		height: 23vw;
		border-radius: 50%;
	}
	ul[data-css="filtersWrapper"] > li:nth-child(3) > button > img {
		border-radius: unset;
	}
	> h3 {
		font-size: 1.8rem;
		margin: 30px 0;
	}

	ul[data-css="productsWrapper"] {
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
		}

		ul[data-css="productsWrapper"] {
			display: flex;
			flex: 1;
			align-items: center;
			justify-content: space-around;
			li + li {
				margin-top: 0px;
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
