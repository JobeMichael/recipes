import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "~/styles/theme";
import RecipeDetailPage from "./RecipeDetail";

describe("RecipeDetailPage", () => {
  const recipe = {
    image: "test-image-url",
    title: "Test Recipe",
    description: "Test recipe description.",
    chefName: "John Doe",
    tags: ["tag1", "tag2", "tag3"],
    id: 1,
  };

  it("renders recipe details correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <RecipeDetailPage recipe={recipe} />
      </ThemeProvider>
    );

    expect(screen.getByText("Recipe Detail")).toBeInTheDocument();
    expect(screen.getByText("Test Recipe")).toBeInTheDocument();
    expect(screen.getByText("Test recipe description.")).toBeInTheDocument();
    expect(screen.getByText("Chef: John Doe")).toBeInTheDocument();

    expect(screen.getByText("Tags:")).toBeInTheDocument();
    expect(screen.getByText("tag1")).toBeInTheDocument();
    expect(screen.getByText("tag2")).toBeInTheDocument();
    expect(screen.getByText("tag3")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Back to list" })
    ).toBeInTheDocument();
  });
});
