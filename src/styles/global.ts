import { createGlobalStyle } from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../utils";

export const Global = createGlobalStyle`
  :root{
    --shadow-black: rgba(0,0,0,0.4);
    --green-gradient: linear-gradient(to right,#55D94A,#13C566);
    --gray900: #222222;
    --gray700: #4d4d4d;
    --gray600: #555555;
    --gray300: #b5b5b5;
    --white: #f0f0f0;
    --yellow: #e7fA0A;
    --green300: #4CE780;
    --green400: #13C566;
    --green600: #117841;
    --green800: #365A47;
    --red: #F56767;
    --font-color: #FFFFFF;
    --nunito: 'Nunito', sans-serif;
    --poppins: 'Poppins', sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html{
    background-color: var(--white);
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  button,
  input[type="button"],
  input[type="submit"]{
    cursor: pointer;
    &:active {
  		transform: scale(0.95);
  	}
  }
  figure > img {
			width: inherit;
			height: inherit;
      border-radius: inherit;
  }
  figure > figcaption {
   display: none;
  }
  /*SCROLL BARS: */
  .scroll{
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 0.8rem;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--gray300);
    }
    ::-webkit-scrollbar-thumb {
      border: 1px solid var(--gray600);
      border-radius: 30px;
    }
  }

  @media only screen and (max-width: ${`${WINDOW_SIZE_DESKTOP}px`}){

    .scroll{
      overflow-y: auto;
      ::-webkit-scrollbar {
      }
      ::-webkit-scrollbar-track {
      }

      ::-webkit-scrollbar-thumb,
      ::-webkit-scrollbar-track,
      ::-webkit-scrollbar {
        background: transparent;
        border: none;
        box-shadow: none;
      }
    }

  }
`;
