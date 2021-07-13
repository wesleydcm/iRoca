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
      font-size: 28px;
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

  p {
    color: var(--color-error);
    font-size: 14px;
    font-family: var(--poppins);
  }

  .input {
    display: flex;
    flex-direction: column;
    height: 320px;
    justify-content: space-evenly;
  }

  h1 {
    color: var(--gray700);
    font-size: 30px;
    font-family: var(--poppins);
    font-weight: 500;
    font-size: 28px;
  }

  .button {
    display: flex;
    align-items: flex-end;
    height: 300px;
    margin-top: 27px;
  }

  .photo {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h1 {
      font-family: var(--poppins);
      font-weight: 500;
      font-size: 28px;
    }

    span {
      padding: 0 10px;
    }
  }
`;
