import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 130px;
  padding-left: 25vw;
  padding-top: 60px;
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
  }
`;

export const Form = styled.form`
  width: 85%;
  margin: 0 auto;
  input {
    width: 100%;
    height: 3.5rem;
    font-size: 0.8rem;
    margin-right: 0;
  }
  input::placeholder {
    color: var(--gray900);
    font-size: 12px;
  }
  label {
    font-size: 1rem;
    margin-bottom: 0.3rem;
    color: var(--gray900);
    font-weight: semi-bold;
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

export const Box = styled.section`
  border-radius: 20px;
  box-shadow: 2px 2px 7px 0px var(--shadow-black);
  font-family: var(--poppins);
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: flex-start;
  gap: 10%;
  .box1 {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .box2 {
    width: 18%;
    min-width: 140px;
  }
  .boxName .boxPrice .boxStock {
    display: flex;
    flex-direction: column;
  }
  .boxName {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .boxCategory {
    select {
      width: 100%;
      height: 2.5rem;
      font-size: 0.8rem;
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
      font-size: 1rem;
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
      color: white;
      font-size: 12px;
    }
  }

  .boxLink {
    display: flex;
    flex-direction: column;

    input {
      width: 24vw;
      height: 3.5rem;
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
  }

  h2 {
    width: 100%;

    font-size: 1rem;
    color: var(--green400);
  }
  margin: auto;
`;
