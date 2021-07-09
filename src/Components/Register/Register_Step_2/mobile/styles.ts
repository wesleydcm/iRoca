import styled from "styled-components";

export const Container = styled.div`
  background-image: var(--green-gradient);
  width: 100vw;
  height: 100vh;
`;

export const Logo = styled.header`
  width: 100%;
  height: 218px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-evenly;

  img {
    padding-bottom: 90px;
    padding-right: 25px;
    height: 190px;
  }

  p {
    font-family: var(--poppins);
    font-size: 18px;
    line-height: 27px;
    font-style: normal;
    font-weight: 500;
    width: 90%;
    color: var(--font-color);
    padding-top: 86px;
    padding-left: 30px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  h1 {
    width: 345px;
    font-size: 22px;
    line-height: 36px;
    color: var(--font-color);
    font-family: var(--poppins);
  }

  .input {
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-around;
  }

  .photo {
    h1 {
      font-size: 18px;
    }
  }

  .photo-input {
    display: flex;
    justify-content: space-around;
    align-items: center;

    span {
      color: var(--font-color);
      font-family: var(--poppins);
    }
  }

  .button {
    margin-top: 40px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: var(--poppins);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    color: var(--font-color);
  }
`;
