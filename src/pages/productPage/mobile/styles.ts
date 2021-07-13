import styled from "styled-components";

export const Wrapper = styled.div`
  & > div > nav {
    justify-content: space-between;

    a {
      width: 33%;
    }
    svg {
      width: 30%;
    }
    span {
      font-size: 0.8rem;
    }
  }
`;

export const Container = styled.div`
  padding-bottom: 125px;
  height: 100vh;

  .rec-carousel-wrapper {
    margin-bottom: 2rem;
  }
  .rec-carousel-wrapper img {
    height: calc(28vh);
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
  & > button:active {
    transform: translateX(-50%) scale(0.98);
  }
  .scroll {
    height: 47vh;
    ::-webkit-scrollbar {
      width: 0;
    }

    .evaluation-cards {
      > div {
        margin: 1.5rem auto 1rem;
        padding-left: 1.5rem;
        padding-bottom: 1rem;
        padding-top: 1.5rem;
        padding: 1.5rem 1rem 1rem 1.5rem;
        span .MuiRating-decimal {
          margin: 0 -3.5px;
          color: var(--yellow);
        }
        .feedback {
          margin-left: 0.5rem;
        }
      }
    }
  }

  .productor {
    width: 90%;
    position: relative;
    margin: 2rem auto;
    height: auto;
    > div:nth-child(2){
      padding: 2rem 0;
      cursor: pointer;
    }
    .image {
      height: fit-content;
      position: absolute;
      right: -5px;
      top: 50px;
      }
      *{
        font-family: var(--poppins);
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
  }
`;

export const GeneralEvaluation = styled.section`
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
`;
export const ProductInformation = styled.section`
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
  @media only screen and (max-width: 390px) {
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
`;
