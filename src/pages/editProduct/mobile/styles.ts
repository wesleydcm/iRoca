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
    svg {
      margin-left: 1rem;
    }
  }
  .divDelete {
    background-color: var(--red);
    width: 98px;
    height: 28px;
    position: absolute;
    bottom: -163px;
    left: 50px;

    transition: 0.5s ease;
    &:hover {
      transition: 0.5s ease;
      box-shadow: 1px 2px 5px 2px var(--gray700);
    }
  }
`;

export const Form = styled.form`
  width: 85%;
  margin: 0 auto;
  input {
    width: 100%;

    height: 32px;
    font-size: 0.8rem;
  }
  label {
    font-size: 12px;
    margin-top: 1rem;
    color: var(--gray900);
  }
  textarea {
    background: transparent;
    width: 100%;
    min-height: 100px;
    color: var(--gray700);
    border: 2px solid var(--green400);
    font-size: 0.8rem;
    outline: none;
    border-radius: 10px;
    padding: 0 15px;
    outline: none;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    font-family: var(--poppins);
    font-style: normal;
  }

  textarea::placeholder {
    color: var(--gray400);
    font-size: 12px;
  }

  input::placeholder {
    color: var(--gray400);
    font-size: 12px;
  }
  button {
    position: absolute;
    bottom: -163px;
    right: 50px;
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
export const DeleteButton = styled.button`
  position: absolute;
  font-size: 0.8rem;
  width: 98px;
  height: 28px;
  transition: 0.5s ease-out;
  border-radius: 12px;
  color: var(--red);
  border-color: transparent;
  text-transform: capitalize;
  text-align: center;
  font-family: var(--poppins);
  font-style: normal;
  font-weight: 600;
  transition: 0.5s ease;
  transition: 0.5s ease;
  &:hover {
    transition: 0.5s ease;
    box-shadow: 1px 2px 5px 2px var(--gray700);
    transform: translate(-2px, 2px);
  }
`;
