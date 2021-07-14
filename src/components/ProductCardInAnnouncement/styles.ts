import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

export const Wrapper = styled.li`
  width: 100%;
  height: 15vh;
  position: relative;
  box-shadow: 0 2px 5px 2px var(--shadow-black);
  margin-inline: auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 3vw;

  .organicFlag {
    width: 10vw;
    height: 2.5vh;
    position: absolute;
    top: 0px;
    left: -1.2vw;
  }

  figure {
    width: 15vw;
    height: 15vw;
    border-radius: 1.2vw;
  }
  div.infoWrapper {
    flex: 1;
    h2,
    h3 {
      font-family: var(--nunito);
      margin-left: 5vw;
      max-width: 40vw;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
      white-space: nowrap;
      margin-bottom: 5px;
    }
    h3 {
      font-size: 0.8rem;
      max-height: 9vh;
      font-weight: 300;
    }
  }
  div.statusWrapper {
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    align-self: flex-end;
    div:nth-child(1) {
      display: flex;
      flex-flow: column;
      align-items: flex-end;
      justify-content: flex-start;
      align-self: flex-end;
      svg {
        width: 4vw;
        height: 4vw;
      }
    }

    div:nth-child(2) {
      justify-self: flex-end;
      align-self: flex-end;
      span {
        font-family: var(--poppins);
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }

  @media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
    width: 19.5vw;
    height: 28vh;
    max-height: 230px;
    padding: 1vw 1vw 0.5vw;
    flex-direction: column;
    min-width: 325px;
    margin: 0 1vw;
    .organicFlag {
      width: 4.5vw;
      height: 2.5vw;
      left: -0.7vw;

      svg {
        width: inherit;
        height: inherit;
      }
    }
    div {
      display: flex;

      figure {
        width: 5vw;
        height: 5vw;
        max-width: 60px;
        max-height: 60px;
        align-self: flex-start;
        border-radius: 0.5vw;
        margin-left: 10px;
      }

      div.infoWrapper {
        display: flex;
        flex-direction: column;
        h2,
        h3 {
          margin: 0;
          max-width: 14vw;
        }

        h2 {
          font-size: 1.5rem;
          margin-top: 20px;
        }
        h3 {
          font-size: 1rem;
          margin-top: 5px;
          margin-bottom: 0.5vh;
        }
      }
    }
    div.statusWrapper {
      width: 100%;
      height: unset;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
      align-self: flex-end;

      svg {
        width: 1.5vw;
        height: 1.5vw;
      }

      justify-self: flex-end;
      span {
        font-family: var(--poppins);
        font-weight: 500;
        margin-left: auto;
      }
    }

    .description {
      width: 90%;
    }
  }
`;
