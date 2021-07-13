import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

export const Container = styled.div`
  min-width: 320px;
  padding: 2rem;
  min-height: 100vh;
  color: var(--gray900);
  padding: 2rem;
  font-family: var(--nunito);
  margin-bottom: 90px;
  
  h1 {
    color: var(--green400);
    align-self: flex-start;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  form {
    margin-top: 1rem;
  }

  @media only screen and (min-width: 370px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
    padding-left: 32vw;
  }
`;

export const NameAndCategory = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
        
    input {
        width: 40vw;
        height: 2rem;
        font-size: 0.8rem;
        margin-right: 2vw;
    }

    select {
        width: 40vw;
        height: 2rem;
        font-size: 0.8rem;
        border: 2px solid var(--green400);
	    border-radius: 10px;
    	background: transparent;
    	color: var(--gray700);
    	outline: none;
	    font-weight: 500;
		line-height: 24px;
	    text-transform: capitalize;
	    text-align: left;
	    font-family: var(--poppins);
	    font-style: normal;
    }    

    @media only screen and (min-width: 370px) {
        input {
            width: 42vw;
            height: 2.5rem;
            font-size: 1rem;
        }

        select {
            width: 42vw;
            height: 2.5rem;
            font-size: 1rem;
        } 
    }

    @media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
        input {
            width: 42vw;
            height: 2.5rem;
            font-size: 1rem;
        }

        select {
            width: 42vw;
            height: 2.5rem;
            font-size: 1rem;
        } 
    }
`;

export const Description = styled.div`
    margin-bottom: 1rem;

    input {
        width: 82vw;
        height: 4rem;
        font-size: 0.8rem;
    }

    @media only screen and (min-width: 370px) {
        input {
            width: 86vw;
            height: 5rem;
            font-size: 1rem;
        }
    }
`;

export const DescriptionPriceAndStock = styled.div`
    @media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
        input {
            width: 86vw;
            height: 5rem;
            font-size: 1rem;
        }
    }
`;

export const Organic = styled.div`
    @media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
        input {
            width: 86vw;
            height: 5rem;
            font-size: 1rem;
        }
    }
`;

export const PriceAndOrganic = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
        
    input {
        width: 40vw;
        height: 2rem;
        font-size: 0.8rem;
        margin-right: 2vw;
    }

    div.switch {
        width: 40vw;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--green400);
        
        span {
            font-family: var(--nunito);
            font-weight:600;
            font-size:1rem;
        }
    }

    @media only screen and (min-width: 370px) {
        input {
            width: 42vw;
            height: 2.5rem;
            font-size: 1rem;
        }

        div.switch {
    
            span {
                font-size:1.2rem;
            }
    }
    }
`;

export const Stock = styled.div`
    margin-bottom: 1rem;

    input {
        width: 75vw;
        height: 2rem;
        font-size: 0.8rem;
    }

    @media only screen and (min-width: 370px) {
        input {
            width: 75vw;
            height: 2.5rem;
            font-size: 1rem;
        }
    }
`;

export const Images = styled.div`
    margin-bottom: 1rem;

    h2 {
        color: var(--green400);
        font-size: 1.2rem;
        font-family: var(--nunito);
        margin-bottom: 0.5rem;
    }

    input {
        width: 80vw;
        height: 2rem;
        font-size: 0.8rem;
        margin-bottom: 0.8rem;
    }

    @media only screen and (min-width: 370px) {
        h2 {
            font-size: 1.5rem;
        }

        input {
            width: 80vw;
            height: 2.5rem;
            font-size: 1rem;
        }
    }
`;

export const Send = styled.div`
    display: flex;
    justify-content: center;
    button {
        font-size: 0.9rem;
        width: 8rem;
        margin-top: 1rem;
    }
 
`;
