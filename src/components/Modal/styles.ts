import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";

export const Wrapper = styled.div`
	margin-left: auto;
`;

export const StyledDialog = styled(Dialog)`
	flex: 1;
	div {
		max-width: unset;
		/* max-height: unset; */
		div {
			/* min-width: 40vw; */
			min-width: ${() => (window.innerWidth > 900 ? "40vw" : "60vw")};
			height: fit-content;
			min-height: 100px;

			h2,
			p {
				padding-left: 2vw;
				margin-top: 2vh;
				font-family: var(--nunito);
			}

			h2 {
				color: var(--green600);
				font-size: 1.5rem;
				text-transform: capitalize;
			}

			div[data-css="navigation"] {
				flex: 1;
				display: flex;
				justify-content: space-between;
				min-height: unset;
				margin: 5vh;
			}
		}
	}
`;
