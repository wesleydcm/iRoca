import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils/index";

export const Container = styled.div`
    min-width: 20rem;
    height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gray900);
    font-family: var(--nunito);
    margin-bottom: 70px;

    h1 {
        color: var(--green400);
        align-self: flex-start;
        margin-bottom: 1rem;
    }

    ul.scroll {
        height: 35vh;
        overflow-y: scroll;
        margin: 1rem 0;
        padding: 0.2rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 1rem;
    }

    li {
        margin-bottom: 1rem;
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

    @media only screen and (min-width: 375px) {
        ul {
            height: 50vh;
        }
  	}
    
    @media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
        padding-left: 32vw;
        
        ul.scroll {
            height: 55vh;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            margin-bottom: 2rem;
            margin-left: -1rem;
        }

        li {
            margin: 1rem;
        }
        
        h1 {
            margin: 1rem 0;
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
	width: 100%;
	height: 11rem;
	box-shadow: 0 2px 5px 2px var(--shadow-black);
	border-radius: 10px;
    padding: 1rem;
	display: flex;
    flex-direction: column;
    margin-top: 1rem;

    h2 {
        padding-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    h3 {
        padding-bottom: 0.5rem;
        font-size: 1rem;
    }

    Button {
        margin: 0.3rem 0;
        align-self: center;
        font-family: var(--nunito);
    }

    @media only screen and (min-width: 375px) {
        Button {
        width: 8rem;
        height: 4rem; 
        font-size: 1rem;
    }
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
            width: 10rem;
            height: 3rem; 
            font-size: 1.5rem;
        }
	}
`;