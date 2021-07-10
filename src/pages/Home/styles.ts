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
		width: 45px;
		height: 45px;
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
		width: 90px;
		height: 90px;
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
	}
`;
