import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 130px;
  padding-left: 30vw;
  padding-top: 6vh;
  padding-bottom: 100px;
  height: 100vh;

  h1 {
    font-weight: 600;
    font-size: 2rem;
    color: var(--green400);
    font-family: var(--poppins);
    top: 10px;
    left: 2rem;
    width: 85%;
    margin: auto;
    margin-bottom: 2rem;
    svg {
      margin-left: 1rem;
    }
  }
  .divDelete {
    background-color: var(--red);
    width: 12vw;
    height: 3rem;
    position: absolute;
    top: 40px;
    right: 20vw;
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
    height: 3.5rem;
    font-size: 1.1rem;
    margin-right: 0;
  }
  input::placeholder {
    color: var(--gray400);
    font-size: 1rem;
    font-style: italic;
  }
  label {
    font-size: 1rem;
    margin-bottom: 0.3rem;
    color: var(--gray900);
    font-weight: semi-bold;
  }

  button {
    position: absolute;
    top: 40px;
    right: 5vw;
    font-size: 1.2rem;
    width: 12vw;
    height: 3rem;
    transition: 0.5s ease-out;
  }
`;

export const Box = styled.section`
  border-radius: 20px;
  box-shadow: 2px 2px 7px 0px var(--shadow-black);
  font-family: var(--poppins);
  padding: 2rem 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: flex-start;
  gap: 10%;

  .box1 {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 2rem;
    margin-bottom: 2rem;
  }
  .box2 {
    width: 18%;
    min-width: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 2rem;
    margin-bottom: 2rem;
  }

  .boxName {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .boxCategory {
    select {
      width: 100%;
      padding: 0 15px;
      height: 3.5rem;
      font-size: 1rem;
      border: 2px solid var(--green400);
      border-radius: 10px;
      background: transparent;
      color: var(--gray700);
      outline: none;
      font-weight: 500;
      line-height: 24px;
      text-transform: capitalize;
      text-align: left;
      font-family: var(--poppins);
      font-style: normal;
    }
  }
  .boxDescription {
    display: flex;
    flex-direction: column;
    textarea {
      resize: none;
      background: transparent;
      height: 10rem;
      color: var(--gray700);
      border: 2px solid var(--green400);
      font-size: 1.2rem;
      outline: none;
      border-radius: 10px;
      padding: 1rem;
      outline: none;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      font-family: var(--poppins);
      font-style: normal;
    }
    textarea::placeholder {
      color: var(--gray400);
      font-size: 1rem;
      font-style: italic;
    }
  }

  .boxLink {
    display: flex;
    flex-direction: column;
    width: 45%;
    input {
      width: 100%;
      height: 3.5rem;
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
  }

  h2 {
    width: 100%;
    margin-bottom: 1rem;

    font-size: 1.2rem;
    color: var(--green400);
  }
  margin: auto;
`;

export const DeleteButton = styled.button`
  position: absolute;
  font-size: 1.2rem;
  width: 12vw;
  height: 3rem;
  transition: 0.5s ease-out;
  border-radius: 12px;
  color: var(--red);
  border-color: transparent;
  font-size: 18px;
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
