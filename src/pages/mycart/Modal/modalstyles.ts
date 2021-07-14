import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../../utils";

export const Container = styled.section`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.section`
  width: 80vw;
  position: absolute;
  z-index: 1000;
  background: #fff;
  height: 70vh;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .close {
      color: var(--green400);
      width: 25px;
      height: 25px;
      position: absolute;
      top: 10px;
      right: 15px;
      transition: transform 0.3s;
      &:hover {
        cursor: pointer;
      }
      &:active {
        transition: transform 0.3s;
        transform: scale(0.95);
      }
    }

    .btn {
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, 0%);
      transition: transform 0.3s;
      &:hover {
        cursor: pointer;
      }
      &:active {
        transition: transform 0.3s;
        transform: scale(0.95);
      }
    }

    .informationNo {
      position: absolute;
      padding: 3rem 1rem;
      font-family: var(--nunito);
      font-weight: 600;
      display: flex;
      align-items: flex-start;
      flex-direction: column;

        p {
          color: var(--green400);
          font-size: 1rem;   
        }

        li {
          color: var(--green400);
          font-size: 0.8rem;   
        }
    }

    .informationYes {
      position: absolute;
      padding: 3rem 1rem;
      font-family: var(--nunito);
      font-weight: 600;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

        p {
          color: var(--green400);
          font-size: 1rem;   
        }
    }


  @media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
    width: 60vw;
    height: 40vh;
    border-radius: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  

    .informationNo {
        padding: 2rem 1rem;

        p {
          font-size: 1.8rem;   
        }

        li {
          font-size: 1.5rem;   
        }
    }

    .informationYes {
        padding: 2rem 1rem;

        p {
          font-size: 1.8rem;   
        }
    }
        
	}
`;
