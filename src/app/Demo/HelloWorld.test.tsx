import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";
import "@testing-library/jest-dom";

describe("HelloWorld", () => {
  it("should render the name", () => {
    render(<HelloWorld name="World" />);
    expect(screen.getByText("Hello, World")).toBeInTheDocument();
  });
});
