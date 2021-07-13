import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

export const LiStyled = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	@media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
	}
`;

export const Wrapper = styled.div`
	height: fit-content;
	margin-inline: auto;
	padding: 15px;
	padding-bottom: 120px;

	> h2 {
		font-family: var(--poppins);
		font-weight: 600;
		color: var(--green400);
		margin-bottom: 10px;
		margin-left: 20px;
		font-size: 1.5rem;
	}

	ul {
		li {
			margin-bottom: 10px;
		}
	}

	@media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		> h2 {
			font-weight: bold;
			color: var(--green400);
			margin-bottom: 10px;
			padding-left: 40px;
			margin-bottom: 20px;
			align-self: flex-start;
			font-size: 2rem;
		}

		ul {
			li {
				margin-bottom: 3vh;
			}
		}
	}

	@media only screen and (min-width: 1100px) {
		padding-left: 27vw;
	}
`;
