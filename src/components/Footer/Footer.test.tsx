import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render the Footer component correctly", () => {
    render(<Footer />);

    const footerElement = screen.getByText("Created by Jobe");

    expect(footerElement).toBeInTheDocument();
  });
});
