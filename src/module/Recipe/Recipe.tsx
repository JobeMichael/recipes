"use client";

import React from "react";
import RecipeDetailPage from "~/components/RecipeDetail/RecipeDetail";
import RecipeListItem from "~/components/RecipeListItem/RecipeListItem";
import { IRecipe } from "~/interface";
import * as S from "./Recipe.styles";

interface IProps {
  recipes: Array<IRecipe>;
}

const Recipe: React.FC<IProps> = ({ recipes }) => {
  const [recipe, setRecipe] = React.useState<IRecipe | null>();

  const handleOnClickRecipe = (recipe: IRecipe) => {
    setRecipe(recipe);
  };

  const handleClearRecipe = () => {
    setRecipe(null);
  };

  return (
    <div>
      {recipe ? (
        <RecipeDetailPage
          recipe={recipe}
          handleClearRecipe={handleClearRecipe}
        />
      ) : (
        <>
          <S.AllRecipesHeader>
            <h1>All Recipes</h1>
            <p>Total recipes : {recipes?.length}</p>
          </S.AllRecipesHeader>
          <S.RecipesWrapper>
            {recipes?.map((recipe) => (
              <RecipeListItem
                key={recipe.id}
                recipe={recipe}
                handleClick={handleOnClickRecipe}
              />
            ))}
          </S.RecipesWrapper>
        </>
      )}
    </div>
  );
};

export default Recipe;
