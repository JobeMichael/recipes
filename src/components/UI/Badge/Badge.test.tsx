import { render } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders children inside the BadgeWrapper", () => {
    const children = "Test Badge";
    const color = "red";

    const { getByTestId, getByText } = render(
      <Badge color={color}>{children}</Badge>
    );

    const childElement = getByText("Test Badge");
    expect(childElement).toBeInTheDocument();
  });
});
