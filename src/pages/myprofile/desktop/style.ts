import styled, { keyframes } from "styled-components";

interface buttonActive {
  buttonActive: boolean;
}
const slideLeft = keyframes`
  from {
    left:-100px;
    opacity:0;  
  }
  to {
    left:0px;
    opacity:1;
  }
`;
const AppearFromRight = keyframes`
  from {
    right:-100px;
    opacity:0;  
  }
  to {
    right:0px;
    opacity:1;
  }
`;
const AppearFromCenter = keyframes`
  from {
    transform:0.6;    
    opacity:0;  
  }
  to {    
    opacity:1;
  }
`;
export const Container = styled.main`
  font-family: var(--poppins);
  padding: 60px 98px 0 calc(318px + 74px);
  padding-left: 32vw;
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  -webkit-font-smoothing: antialiased;
  -webkit-animation: ${slideLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${slideLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  h1 {
    width: 100%;
    color: var(--green400);
    font-size: 2em;
    margin-bottom: 36px;
    font-weight: 600px;
    position: relative;
    a {
      position: absolute;
      right: 0;
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
  }
`;

export const ContactContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 240px;
  position: relative;
  animation: ${AppearFromCenter} 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  gap: 52px;

  img {
    border-radius: 15px;
    min-width: 220px;
    height: 240px;
  }
  h2 {
    font-size: 2em;
    color: var(--green400);
    margin-bottom: 12px;
    font-weight: 600;
  }
  h3 {
    font-size: 1.4em;
    color: var(--gray600);
    margin-bottom: 4px;
  }
  h4 {
    font-size: 1.2em;
    letter-spacing: 1px;
    font-weight: 500;
    font-style: normal;
    overflow: hidden;
    color: var(--gray700);
    margin-bottom: 2px;
    padding-left: 1em;
  }
`;
export const ToggleRendering = styled.div<buttonActive>`
  width: 100%;
  display: flex;
  margin: 48px 0;
  button {
    font-family: var(--poppins);
    font-weight: 700;
    font-size: 1.8em;
    outline: none;
    border: none;
    letter-spacing: 1px;
    background-color: transparent;
    &:active {
      transform: scale(0.9);
    }
    span {
      &:hover {
        filter: brightness(0.9);
      }
    }
    transition: transform 100ms ease-out;
    color: ${({ buttonActive }) =>
      buttonActive ? `var(--green400)` : `var(--gray300)`};
  }

  button + button {
    margin-left: 55px;
    color: ${({ buttonActive }) =>
      !buttonActive ? `var(--green400)` : `var(--gray300)`};
  }
`;

export const EvaluationContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${slideLeft} 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  .averageEvaluation:nth-child(1) {
    animation: ${AppearFromRight} 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: -90;
    right: 0;
    top: -152px;

    h4 {
      font-size: 1.4em;
      margin-right: 1rem;
    }
  }
`;
export const ProductContent = styled.section`
  width: 100%;
  position: relative;
  animation: ${AppearFromRight} 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  column-gap: 28px;
  row-gap: 2rem;
  button {
    outline: none;
    border: none;
    transition: transform 100ms ease-out;
    &:active {
      transform: scale(0.98);
      transition: transform 100ms ease-out;
    }

    &:hover {
      filter: brightness(0.95);
    }
  }
`;
