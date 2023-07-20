"use client";
import { IRecipe } from "~/interface";
import * as S from "./RecipeListItem.styles";

interface IProps {
  handleClick: (recipe: IRecipe) => void;
  recipe: IRecipe;
}

const RecipeListItem: React.FC<IProps> = ({ recipe, handleClick }) => {
  const { image, title } = recipe;
  return (
    <S.MenuCard onClick={() => handleClick(recipe)}>
      <S.ImageWrapper>
        <S.ItemCoverImage imageurl={image}></S.ItemCoverImage>
      </S.ImageWrapper>
      <S.Container>
        <p>{title}</p>
      </S.Container>
    </S.MenuCard>
  );
};

export default RecipeListItem;
