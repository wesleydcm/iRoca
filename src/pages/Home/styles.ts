import styled from "styled-components";

export const Wrapper = styled.div`
	svg[data-css="logo"] {
		path {
			stroke: var(--green400);
		}
		path:nth-child(3),
		path:nth-child(4) {
			fill: var(--green400);
		}
	}
`;
