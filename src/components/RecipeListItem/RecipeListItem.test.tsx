import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RecipeListItem from "./RecipeListItem";

describe("RecipeListItem", () => {
  const recipe = {
    image: "test-image-url",
    title: "Test Recipe",
    id: 1,
    description: "Test recipe description.",
    chefName: "John Doe",
    tags: ["tag1", "tag2", "tag3"],
  };

  it("renders recipe details correctly", () => {
    render(<RecipeListItem recipe={recipe} handleClick={() => {}} />);

    expect(screen.getByText("Test Recipe")).toBeInTheDocument();

    const imageElement = screen.getByTestId("recipe-image");
    expect(imageElement).toBeInTheDocument();
  });

  it("calls handleClick with the correct recipe when clicked", async () => {
    const mockHandleClick = jest.fn();
    render(<RecipeListItem recipe={recipe} handleClick={mockHandleClick} />);

    userEvent.click(screen.getByText("Test Recipe"));

    await waitFor(() => {
      expect(mockHandleClick).toHaveBeenCalledWith(recipe);
    });
  });
});
