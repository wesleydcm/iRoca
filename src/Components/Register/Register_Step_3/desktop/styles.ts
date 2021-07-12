import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Logo = styled.header`
  height: 40%;
  width: 100%;
  background-image: var(--green-gradient);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .description {
    h1 {
      font-family: var(--poppins);
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 72px;
      color: var(--font-color);
    }

    p {
      font-family: var(--poppins);
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      color: var(--font-color);
      width: 515px;
    }
  }

  .image {
    padding-bottom: 80px;

    img {
      width: 175px;
      height: 155px;
    }
  }
`;

export const Form = styled.form`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  .input {
    display: flex;
    flex-direction: column;
    height: 370px;
    justify-content: space-evenly;
  }

  h1 {
    color: var(--gray700);
    font-size: 30px;
  }

  .button {
    display: flex;
    align-items: flex-end;
    height: 300px;
    margin-top: 65px;
  }

  .photo {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    span {
      padding: 0 10px;
    }

    input {
      width: 180px;
      padding: 0 15px;
      border: 2px solid var(--green400);
      border-radius: 10px;
      background: transparent;
      color: var(--gray700);
      outline: none;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-transform: capitalize;
      text-align: left;
      font-family: var(--poppins);
      font-style: normal;
      height: 45px;

      &::placeholder {
        color: var(--gray300);
      }
    }
  }
`;
