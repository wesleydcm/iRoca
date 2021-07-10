import styled from "styled-components";

export const Container = styled.div`
  .rec-carousel-wrapper {
    margin-bottom: 2rem;
  }
  img {
    height: calc(45vh - 2rem);
    pointer-events: none;
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
  & > button {
    position: absolute;
    top: 50px;
    left: 50%;
    width: 70%;
    height: 50px;
    transform: translateX(-50%);
  }
  .scroll {
    max-height: 49vh;
    ::-webkit-scrollbar {
      width: 0;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    font-family: var(--nunito);
    width: 90%;
    margin: 0 auto;
    p {
      color: var(--gray600);
      width: 68%;
      font-weight: 300;
    }
    > div {
      color: var(--green400);
      font-size: 1.2rem;
      font-weight: 700;

      span {
        color: var(--gray900);
        display: block;
        margin: 0 auto;
        width: fit-content;
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
  .productorCard {
    width: 90%;
    height: 250px;
    margin: 2rem auto;
    border-radius: 15px;
    background: #f00;
  }

  .avaliacoes-geral {
    font-family: var(--nunito);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    h3 {
      color: var(--gray900);
      font-size: 18px;
    }
    & > div {
      font-size: 12px;
      font-weight: 600;
      color: var(--gray900);
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
      p {
        font-size: 12px;
        margin-right: 0.5rem;
      }
      > div > span .MuiRating-decimal {
        margin: 0 -2px;
        color: var(--yellow);
      }
    }
  }

  @media only screen and (max-width: 390px) {
    > button {
      font-size: 0.9rem;
    }
    .rec-dot {
      width: 12px;
      height: 12px;
    }

    .info {
      p {
        font-size: 0.9rem;
        width: 65%;
      }

      > div {
        font-size: 1rem;
        span {
          font-size: 1.3rem;
        }
      }
    }
  }
`;
