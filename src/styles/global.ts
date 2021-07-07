import { createGlobalStyle } from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../utils";
export const Global = createGlobalStyle`
  :root{
    --green-gradient: linear-gradient(to right,#23D65C,#55D94A);
    --gray900: #222222;
    --gray700: #4d4d4d;
    --gray600: #555555;
    --gray300: #b5b5b5; 
    --white: #f0f0f0;
    --yellow: #e7fa0a;
    --green300: #4CE780;
    --green400: #13C566;
    --green600: #117841;
    --green800: #365A47;
    --red: #F56767;
    --font-color: #fff;
    --nunito: 'Nunito', sans-serif;
    --Poppins: 'Poppins', sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  button{
    cursor: pointer;
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
