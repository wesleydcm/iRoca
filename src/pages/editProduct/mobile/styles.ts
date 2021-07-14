import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 130px;
  padding-top: 45px;
  padding-bottom: 130px;

  h1 {
    font-weight: 600;
    font-size: 1.3rem;

    color: var(--green400);
    font-family: var(--poppins);
    position: absolute;
    top: 10px;
    left: 2rem;
  }
  figure {
    position: relative;
    width: fit-content;
    margin: 1rem 0 0 4rem;

    img:nth-child(1) {
      width: 30vw;
      height: 30vw;
      border-radius: 100%;
    }
    img:nth-child(2) {
      width: 40px;
      height: 40px;
      position: absolute;
      right: -18px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
  @media only screen and (min-width: 900px) {
    padding-left: 25vw;
  }
`;

export const Form = styled.form`
  width: 85%;
  margin: 0 auto;
  input {
    width: 100%;
    margin-top: 1rem;
    height: 32px;
    font-size: 0.8rem;
  }
  input::placeholder {
    color: var(--gray900);
    font-size: 12px;
  }
  button {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 0.8rem;
    width: 100px;
    height: 31px;
  }
`;

export const Box = styled.div`
  border-radius: 20px;
  box-shadow: 2px 2px 7px 0px var(--shadow-black);
  font-family: var(--poppins);
  padding: 1rem 1rem 2rem;
  h2 {
    font-size: 1rem;
    color: var(--green400);
  }
  margin: 2rem 0;
`;
