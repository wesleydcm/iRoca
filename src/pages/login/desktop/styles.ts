import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  font-family: var(--poppins);

  form {
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 2rem auto 0;
    max-width: 1300px;
  }
  form > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      align-self: flex-start;
      color: var(--gray600);
      font-size: 2rem;
    }
    input {
      margin-top: 2rem;
      color: var(--gray900);
    }
    input::placeholder {
      color: var(--gray600);
      transition: transform 0.5s;
    }
    input:hover::placeholder {
      transform: translate(10px);
      transition: transform 0.5s;
    }
  }

  a {
    color: var(--green400);
    font-weight: 600;
    font-size: 1.5rem;
    width: 50%;
    align-self: center;
    text-align: left;
  }
  a:hover {
    text-decoration: underline;
  }

  button {
    margin-top: 2rem;
  }
`;

export const Header = styled.header`
  background: var(--green-gradient);
  height: 43.4vh;
  div.container {
    max-width: 1300px;
    width: 75%;
    color: var(--font-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    h1,
    p {
      font-family: var(--poppins);
    }
    h1 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.35rem;
      width: 85%;
    }

    svg {
      width: 20%;
    }
  }
`;
