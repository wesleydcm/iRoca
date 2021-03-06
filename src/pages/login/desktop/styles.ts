import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
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
    height: 37vh;
    justify-content: space-around;
    h2 {
      align-self: flex-start;
      color: var(--gray600);
      font-size: 2rem;
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

  input {
    width: 280px;
    padding: 0 15px;
    border: 2px solid var(--green300);
    border-radius: 10px;
    background: transparent;
    color: var(--gray600);
    outline: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    font-family: var(--poppins);
    font-style: normal;
    height: 50px;
    text-transform: lowercase;

    &::placeholder {
      color: var(--grey300) !important;
    }
  }

  @media only screen and (max-width: 1100px) {
    a {
      width: 40%;
    }
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
