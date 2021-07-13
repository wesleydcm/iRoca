import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import userEvent from "@testing-library/user-event";
import Login from "./mobile";

describe("LoginPage", () => {
  render(<Login />);

  const title1 = "inputs need  inputs on login page";
  it(title1, () => {
    const login = screen.getByTestId("login");
    const password = screen.getByTestId("password");

    expect(login).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});
