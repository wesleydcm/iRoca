import styled from "styled-components";

export const Container = styled.div`
  padding: 6vh 6vw 12vh 30vw;
  height: 100vh;
  h1 {
    font-weight: 600;
    font-size: 2.6rem;
    color: var(--green400);
    font-family: var(--poppins);
    position: absolute;
    top: 10px;
    right: 15vw;
  }
  a {
    position: absolute;
    right: 4vw;
    outline: none;
    border: none;
    svg {
      height: 56px;
      width: 34px;
      path {
        fill: var(--green400);
      }
    }
  }

  figure {
    position: relative;
    width: fit-content;
    margin: 0 0 0 8rem;

    img:nth-child(1) {
      width: 10vw;
      height: 10vw;
      border-radius: 100%;
      min-width: 177px;
      min-height: 177px;
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
`;

export const Form = styled.form`
  width: 85%;
  max-width: 1000px;
  margin: 0 auto;
  input {
    width: 100%;
    height: 3.5rem;
    font-size: 1.1rem;
  }
  input::placeholder {
    color: var(--gray700);
    font-size: 1rem;
  }
  label {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    color: var(--gray900);
    font-weight: bold;
  }
  button {
    position: absolute;
    top: 12vh;
    right: 16vw;
    font-size: 1.5rem;
    width: 12vw;
    height: 6vh;
  }
`;

export const Box = styled.div`
  border-radius: 20px;
  box-shadow: 2px 2px 7px 0px var(--shadow-black);
  font-family: var(--poppins);
  padding: 1rem 1rem 1rem 4rem;
  display: flex;
  flex-flow: row wrap;
  column-gap: 5vw;
  justify-content: flex-start;
  div {
    display: flex;
    flex-direction: column;
    flex-direction: nowrap;
    width: calc(50% - 5vw);
    margin-bottom: 2vh;
    input {
      border: 3px solid var(--green400);
    }
  }
  h2 {
    width: 100%;
    font-size: 1.5rem;
    color: var(--green400);
  }
  margin: 2rem 0;
`;
