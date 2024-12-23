import { store } from "@/app/store";
import { LoginForm } from "../app/components/LoginForm";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

describe("LoginPage", () => {
  it("should render the login form", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("User ID")).toBeInTheDocument();
  });
});
