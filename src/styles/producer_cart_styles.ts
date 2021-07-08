import styled from "styled-components";

export const Container = styled.div`
  width: 359px;
  height: 234px;

  div {
    font-family: var(--Poppins);
    color: var(--gray700);
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  @media (min-width: 900px) {
    width: 431px;
    height: 388px;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;

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

  .image {
    display: flex;

    div {
      font-size: 14px;
      padding: 3px;
    }
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

  @media (min-width: 900px) {
    flex-direction: column-reverse;

    .information {
      justify-content: center;
      margin-left: 30px;
      margin-bottom: 20px;
      /* background-color: greenyellow; */
    }

    .image {
      display: flex;
      justify-content: flex-end;
    }

    .image div {
      font-size: 20px;
      width: 30px;
      padding-top: 5px;
    }

    .contact {
      width: 385px;
    }

    .contact p {
      padding-top: 5px;
    }

    h3 {
      font-size: 18px;
      line-height: 27px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      padding: 5px;
      padding-top: 5px;
    }
  }
`;
