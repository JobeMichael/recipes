import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import Layout from "./Layout";

describe("Layout", () => {
  it("should render the Layout component correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Layout>
          <div>Content</div>
        </Layout>
      </ThemeProvider>
    );

    const headerElement = screen.getByTestId("header");
    const footerElement = screen.getByTestId("footer");
    const contentElement = screen.getByText("Content");

    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
