import styled from "styled-components";

export const Container = styled.div`
  height: 78px;
  width: 318px;
  border-radius: 5px;
  background: var(--font-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;

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
  }
`;

export const Information = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .image {
    width: 75px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .image img {
    height: 55px;
    width: 55px;
    border-radius: 5px;
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
  }

  .description h3 {
    font-family: var(--Poppins);
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: var(--gray900);
  }

  .price {
    width: 60px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 5px;
  }

  .price p {
    font-family: var(--Poppins);
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
  }
`;
