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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 2rem;

  p {
    color: var(--color-error);
    font-size: 16px;
    font-family: var(--poppins);
  }

  h1 {
    width: 345px;
    font-size: 22px;
    line-height: 36px;
    color: var(--font-color);
    font-family: var(--poppins);
    margin-left: 3rem;
  }

  .input {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .photo {
    h1 {
      font-size: 18px;
      margin-top: 1rem;
    }
  }

  .photo-input {
    display: flex;
    justify-content: space-around;
    justify-content: center;

    span {
      color: var(--font-color);
      font-family: var(--poppins);
    }
  }

  .button {
    margin-top: 40px;
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
    text-align: left;
    font-family: var(--poppins);
    font-style: normal;
    height: 45px;
    margin-top: 1rem;

    &::placeholder {
      color: var(--white);
    }
  }
`;
