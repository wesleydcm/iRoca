import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils/index";

export const Container = styled.div`
    min-width: 20rem;
    min-height: 100vh;

    ul {
        height: 15rem;
        overflow-y: scroll;
        margin: 1.4rem 0;
        padding: 0 0.8rem;
        li + li {
        margin-top: 1.25rem;
        }
    }
    .last {
        margin-bottom: 4rem;
    }

    p {
        color: black;
    } 

    span {
        color: black;
    }
    
    @media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {

		
	}
`;

export const Wrapper = styled.div`
	width: 90%;
	height: 15rem;
	box-shadow: 0 2px 5px 2px var(--shadow-black);
	border-radius: 10px;
	display: flex;
	align-items: center;
	padding: 15px 15px 8px 25px;
`;