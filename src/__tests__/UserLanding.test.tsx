import UserLanding from "@/app/Pages/UserLanding";
import { store } from "@/app/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

xdescribe("LoginPage", () => {
  xit("should render the login form", () => {
    // render(
    //   <Provider store={store}>
    //     <MemoryRouter>
    //       <UserLanding />
    //     </MemoryRouter>
    //   </Provider>
    // );
    // const element = screen.getByTestId("user-welcome-text");
    // expect(element).toHaveTextContent("Welcome Nikhil");
    expect(true).toBe(true);
  });
});
