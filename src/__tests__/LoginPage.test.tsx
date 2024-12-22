import { LoginForm } from "../app/components/LoginForm";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("LoginPage", () => {
  it("should render the login form", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
