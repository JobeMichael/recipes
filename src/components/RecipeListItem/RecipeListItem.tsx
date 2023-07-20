"use client";
import * as S from "./RecipeListItem.styles";

interface IMenuItemProps {
  handleAddToCartClick: (item: any) => void;
}

const RecipeListItem = ({ image, title }: any) => {
  return (
    <S.MenuCard>
      <S.ImageWrapper>
        <S.ItemCoverImage imageUrl={image}></S.ItemCoverImage>
      </S.ImageWrapper>
      <S.Container>
        <p>{title}</p>
      </S.Container>
    </S.MenuCard>
  );
};

export default RecipeListItem;
