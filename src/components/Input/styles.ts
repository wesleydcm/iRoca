import styled from "styled-components";

export const StyledInput = styled.input`
  width: ${({ width }) => width + "px"};
  height: 50px;
  padding: 0 15px;
  border: ${({ color }) =>
    color === "white"
      ? "2px solid var(--font-color)"
      : "2px solid var(--green400)"};
  border-radius: 10px;

  background: transparent;

  color: ${({ color }) =>
    color === "white" ? "var(--font-color)" : "var(--gray700)"};

  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  font-family: var(--poppins);
  font-style: normal;

  &::placeholder {
    color: ${({ color }) =>
      color === "white" ? "var(--font-color)" : "var(--gray300)"};
  }
`;
