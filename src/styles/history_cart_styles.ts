import styled from "styled-components";

export const Container = styled.div`
  height: 78px;
  width: 318px;
  border-radius: 5px;
  background: var(--font-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;

  @media (min-width: 900px) {
    width: 279px;
    height: 182px;
  }

  .organic {
    opacity: 0;
  }

  .flag {
    width: 35px;
    height: 20px;
  }

  .flag img {
    height: 22px;
    width: 40px;

    @media (min-width: 900px) {
      height: 45px;
      width: 68px;
    }
  }
`;

export const Information = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 900px) {
    display: initial;
  }

  .desktop {
    display: flex;
    padding-top: 30px;
    justify-content: space-around;
  }

  .image {
    width: 75px;
    height: 100%;
    display: flex;
    align-items: center;

    @media (min-width: 900px) {
      padding-top: 10px;
    }
  }

  .image img {
    height: 55px;
    width: 55px;
    border-radius: 5px;

    @media (min-width: 900px) {
      height: 66px;
      width: 66px;
    }
  }

  .description {
    width: 145px;
    height: 92px;
    padding-top: 5px;
  }

  .description p {
    font-size: 10px;
    line-height: 15px;
    font-family: var(--Poppins);
    font-weight: 500;
    color: var(--gray900);

    @media (min-width: 900px) {
      font-size: 18px;
      line-height: 25px;
      font-family: var(--nunito);
      font-weight: 700;
    }
  }

  .description h3 {
    font-family: var(--Poppins);
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: var(--gray900);

    @media (min-width: 900px) {
      font-size: 32px;
      line-height: 44px;
      font-family: var(--nunito);
      font-weight: bold;
      color: var(--gray600);
    }
  }

  .price {
    width: 60px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 5px;

    @media (min-width: 900px) {
      width: 100%;
      height: 58px;
      justify-content: flex-end;
      padding-right: 13px;
    }
  }

  .price p {
    font-family: var(--Poppins);
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;

    @media (min-width: 900px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
