"use client";

import ReactMarkdown from "react-markdown";
import { getTagColor } from "~/utils/getTagColor";
import Badge from "../UI/Badge";
import * as S from "./RecipeDetail.styles";

interface IRecipeDetailPageProps {
  recipe: any;
}

const RecipeDetailPage: React.FC<IRecipeDetailPageProps> = ({ recipe }) => {
  return (
    <S.RecipeDetailContainer>
      <h1>Recipe Detail</h1>
      <S.RecipeImage src={recipe.image} alt={recipe.title} />
      <S.RecipeTitle>{recipe.title}</S.RecipeTitle>
      <S.RecipeDescription>
        <ReactMarkdown className="mb-4">{recipe.description}</ReactMarkdown>
      </S.RecipeDescription>
      <S.ChefName>Chef: {recipe.chefName}</S.ChefName>
      {recipe.tags && recipe.tags.length > 0 && (
        <>
          <h3>Tags:</h3>
          <div>
            {recipe.tags.map((item: string, index: number) => {
              return (
                <Badge key={index} color={getTagColor(item)}>
                  {item}
                </Badge>
              );
            })}
          </div>
        </>
      )}
    </S.RecipeDetailContainer>
  );
};

export default RecipeDetailPage;
