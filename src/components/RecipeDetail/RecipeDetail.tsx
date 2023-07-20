"use client";

import ReactMarkdown from "react-markdown";
import { IRecipe } from "~/interface";
import { getTagColor } from "~/utils/getTagColor";
import Badge from "../UI/Badge/Badge";
import { Button } from "../UI/Button/Button.styled";
import * as S from "./RecipeDetail.styles";

interface IRecipeDetailPageProps {
  recipe: IRecipe;
  handleClearRecipe?: () => void;
}

const RecipeDetailPage: React.FC<IRecipeDetailPageProps> = ({
  recipe,
  handleClearRecipe,
}) => {
  const { image, title, description, chefName, tags } = recipe;

  return (
    <S.RecipeDetailContainer>
      <S.Header>
        <h1>Recipe Detail</h1>
        <Button onClick={handleClearRecipe}>Back to list</Button>
      </S.Header>
      <S.RecipeDetailWrapper>
        <S.RecipeImage src={image} alt={title} />
        <S.RecipeTitle>{title}</S.RecipeTitle>
        <S.RecipeDescription>
          <ReactMarkdown>{description}</ReactMarkdown>
        </S.RecipeDescription>
        {chefName && <S.ChefName>Chef: {chefName}</S.ChefName>}
        {tags && tags.length > 0 && (
          <S.BadgeWrapper>
            <h3>Tags:</h3>
            <div>
              {tags.map((item: string, index: number) => {
                return (
                  <Badge key={index} color={getTagColor(item)}>
                    {item}
                  </Badge>
                );
              })}
            </div>
          </S.BadgeWrapper>
        )}
      </S.RecipeDetailWrapper>
    </S.RecipeDetailContainer>
  );
};

export default RecipeDetailPage;
