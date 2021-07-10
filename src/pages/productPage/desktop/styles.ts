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
    bottom: 20px;
    right: 20px;
    height: 69px;
    width: 414px;
  }

  .scroll {
    height: 45vh;
    width: 57%;

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
        padding-top: 3.8rem;
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
