import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "~/styles/theme";
import Button from "./Button";

describe("Button Component", () => {
  it("renders the button with the correct text", () => {
    const buttonText = "Click Me";
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>{buttonText}</Button>
      </ThemeProvider>
    );

    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const buttonText = "Click Me";
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClickMock}>{buttonText}</Button>
      </ThemeProvider>
    );

    // Simulate a click on the button
    fireEvent.click(getByText(buttonText));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("renders the button as disabled when the 'disabled' prop is true", () => {
    const buttonText = "Click Me";
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button disabled>{buttonText}</Button>
      </ThemeProvider>
    );

    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeDisabled();
  });
});
