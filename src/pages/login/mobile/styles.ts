import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 7%;
  height: 100vh;
  background: var(--green-gradient);
  color: var(--font-color);
  position: absolute;
  top: 0;
  left: 0;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
  }

  input {
    max-width: 300px;
    width: 80%;
    font-size: 1rem;
  }

  input + input {
    margin-top: 1rem;
  }
  button {
    font-size: 0.875rem;
    width: 7.8125rem;
    margin-top: 2rem;
  }

  h1,
  p,
  a {
    font-family: var(--poppins);
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
    max-width: 75%;
  }
  p {
    font-size: 1rem;
  }
  svg {
    display: block;
    margin: 1rem 0 0 auto;
    width: 26.8vw;
  }

  a {
    color: var(--font-color);
    position: relative;
    font-size: 1rem;
    margin-top: 1.3rem;
  }
  a::before {
    display: block;
    content: "";
    width: 100%;
    height: 3px;
    background-color: var(--font-color);
    position: absolute;
    bottom: -7px;
  }
`;
