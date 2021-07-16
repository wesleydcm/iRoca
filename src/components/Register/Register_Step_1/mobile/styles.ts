import styled from "styled-components";

export const Container = styled.div`
  background-image: var(--green-gradient);
  width: 100vw;
  min-height: 100vh;
`;

export const Logo = styled.header`
  width: 100%;
  height: 218px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-family: var(--poppins);
    font-size: 33px;
    font-style: normal;
    font-weight: 500;
    color: var(--font-color);
    width: 195px;
  }

  img {
    padding-bottom: 90px;
    height: 190px;
  }
`;

export const Descrition = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  justify-content: center;

  p {
    font-family: var(--poppins);
    font-size: 17px;
    line-height: 27px;
    font-style: normal;
    font-weight: 500;
    width: 90%;
    color: var(--font-color);
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 395px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  p {
    color: var(--color-error);
    font-size: 16px;
    font-family: var(--poppins);
  }

  .input {
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-around;
  }

  input {
    width: 280px;
    padding: 0 15px;
    border: 2px solid var(--white);
    border-radius: 10px;
    background: transparent;
    color: var(--white);
    outline: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-transform: lowercase;
    text-align: left;
    font-family: var(--poppins);
    font-style: normal;
    height: 50px;

    &::placeholder {
      color: var(--white);
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 90px;

  p {
    font-family: var(--poppins);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    color: var(--font-color);
  }
`;
