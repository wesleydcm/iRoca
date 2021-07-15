import styled from "styled-components";

export const Container = styled.div`
  padding-left: 35vw;
  padding-right: 3rem;
  & > h1 {
    color: var(--gray600);
    font-family: var(--poppins);
    margin: 2rem 0;
  }
  .rec-carousel-wrapper {
    width: 50%;
  }
  .rec-carousel-wrapper img {
    pointer-events: none;
    height: 35vh;
  }
  .rec-dot {
    box-shadow: none;
    background: var(--green800);
    width: 14px;
    height: 14px;
  }
  .rec-dot_active {
    background: var(--green400);
    box-shadow: 0px 0px 10px 0px var(--green400);
    width: 14px;
    height: 14px;
  }
  .rec-arrow {
    background: none;
    box-shadow: none;
    color: var(--gray900);
  }
  .rec-arrow:hover {
    background: var(--green400);
    color: var(--font-color);
  }
  .productorCard {
    width: 50%;
    height: 250px;

    border-radius: 15px;
    background: #f00;
  }

  .container {
    display: flex;
    justify-content: space-between;

    .productorCard {
      height: 390px;
      width: 40%;
    }
  }
  & > button {
    position: fixed;
    bottom: 5vh;
    right: 3vh;
    height: 69px;
    width: 270px;
  }

  .producer {
    width: 35%;
    position: relative;
    font-family: var(--poppins);
    .makeStyles-root-1 {
      position: absolute;
      top: 10;
      right: 100px;
    }
    .information {
      padding-top: 50px;
      margin: 0 auto;
      width: 95%;
      justify-content: flex-start;
      * {
        word-wrap: break-word;
        width: 95%;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }

  .scroll {
    height: 45vh;
    width: 60%;
    padding-right: 1rem;
    .qty {
      font-size: 1.7rem;
      font-family: var(--nunito);
      color: var(--green400);
      font-weight: 900;
      span {
        color: var(--gray900);
        margin-left: 1rem;
        font-weight: 600;
      }
    }

    > p {
      margin: 1rem 0 2rem;
      color: var(--gray600);
    }

    .general-evaluation {
      display: flex;
      justify-content: space-between;
      padding-right: 1.5rem;
      margin-bottom: 2rem;
      h3 {
        color: var(--gray900);
        font-family: var(--nunito);
      }
      > div {
        display: flex;
        justify-content: space-between;
        flex-flow: row-reverse wrap;
        align-items: center;
        > div {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        p {
          font-size: 0.9rem;
        }
        > span {
          color: var(--gray900);
          font-size: 0.9rem;
          margin-right: 0.8rem;
        }
      }
    }

    .evaluation-cards {
      > div {
        padding-left: 2rem;
        width: 95%;
        padding-top: 3.5rem;
        padding-bottom: 1.5rem;

        h3 {
          font-size: 1rem;
        }
        h2 {
          font-size: 1rem;
        }
      }
    }
  }

  @media only screen and (min-width: 1100px) {
    padding-left: 30vw;
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;

  .totalButtons{
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 18vh;
    right: 2vw;
  }
  .total {
    font-family: var(--nunito);
    font-weight: 700;
    color: var(--gray900);
    font-size: 1.4rem;
  }
  .buttons {
    border: 1px solid var(--green400);
    font-family: var(--poppins);
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
  span {
    margin: 0.8rem 1rem;
  }
  button {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--green400);
    border: none;
    background: none;
  }
  .favorite{
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 30vh;
    right: 3vh;

      button {
        width: 22vw;
        height: 40px;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--gray600);
        border: none;
        background: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      svg {
        width: 3vw;
        height: 3vw;
	    }
  }
`;
