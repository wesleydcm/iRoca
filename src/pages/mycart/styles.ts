import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils/index";

export const Container = styled.div`
    min-width: 20rem;
    min-height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gray900);
    font-family: var(--nunito);

    h1 {
        color: var(--green400);
        align-self: flex-start;
        margin-bottom: 1rem;
    }

    ul {
        height: 14rem;
        overflow-y: scroll;
        margin: 1rem 0;
        padding: 0 0.8rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 95%;
        margin: 0 1rem;
        li + li {
        margin-top: 1rem;
        }
    }

    .last {
        margin-bottom: 2rem;
    }

    p {
        color: var(--gray600);
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        align-self: flex-start;
    } 

    a {
        align-self: flex-start;
    }

    span {
        color: var(--green400);
        font-size: 1.2rem;
    }
    
    @media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
        padding-left: 32vw;
        
        ul {
            height: 28rem;
        }
        
        h1 {
            margin: 2rem 0;
            font-size: 2.5rem;
        }

        p {
            font-size: 2rem;
        } 

        span {
            font-size: 2rem;
        }
	}

`;

export const Wrapper = styled.div`
	width: 90%;
	height: 10rem;
	box-shadow: 0 2px 5px 2px var(--shadow-black);
	border-radius: 10px;
    padding: 1rem;
	display: flex;
    flex-direction: column;
    margin-top: 2rem;

    h2 {
        padding-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    h3 {
        padding-bottom: 0.5rem;
        font-size: 1rem;
    }

    Button {
        margin: 0.5rem 0;
        align-self: center;
        font-family: var(--nunito);
    }

    @media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: flex-start;
        
        div {
            display: flex;
            flex-direction: column;
        }

        h2 {
            padding: 0.5rem 0;
            font-size: 1.5rem;
        }

        h3 {
            padding: 0.5rem 0;
            font-size: 1.3rem;
        }

        Button {
            margin-right: 2rem;
        }
	}
`;