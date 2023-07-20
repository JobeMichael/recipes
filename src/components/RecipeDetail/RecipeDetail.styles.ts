import styled from "styled-components";
import { device } from "~/styles/device";

export const RecipeDetailContainer = styled.div`
  margin: 0 auto;
`;

export const RecipeImage = styled.img`
  height: auto;
  border-radius: 5px;
  width: 100%;
`;

export const RecipeTitle = styled.h3`
  margin-top: 30px;
  font-size: 24px;
  font-weight: bold;
`;

export const RecipeDescription = styled.p`
  margin-top: 10px;
  font-size: 22px;
  color: #666;
  line-height: 1.5;
`;

export const ChefName = styled.p`
  margin-top: 5px;
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const RecipeDetailWrapper = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 70%;
  }
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;

  div {
    display: flex;
    gap: 5px;
  }
`;
