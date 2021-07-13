import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

interface Props {}

export const LiStyled = styled.li<Props>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	@media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	margin-inline: auto;

	@media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
	}

	@media only screen and (min-width: 1100px) {
		padding-left: 27vw;
	}
`;
