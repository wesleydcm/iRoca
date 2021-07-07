import styled from "styled-components";

export const Container = styled.div`
  width: 359px;
  height: 234px;

  div {
    font-family: var(--Poppins);
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
  height: 100%;

  .information {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }

  .contact {
    padding-top: 10px;
  }

  .contact p {
    padding: 0;
  }

  h3 {
    font-family: var(--Poppins);
    color: var(--gray300);
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    margin-left: 12px;
  }

  p {
    font-family: var(--Poppins);
    color: var(--gray900);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin-left: 21px;
    padding-top: 10px;
  }
`;
