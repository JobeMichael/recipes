import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import Header from "./Header";

describe("Header", () => {
  it("should render the Header component correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const headerElement = screen.getByText("Trade");

    expect(headerElement).toBeInTheDocument();
  });
});
