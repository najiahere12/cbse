import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders the Button component with the correct label", () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
