"use client";
import * as S from "./Badge.styles";

interface IProps {
  color: string;
  children: React.ReactNode;
}

const Badge: React.FC<IProps> = ({ color, children }) => {
  return <S.BadgeWrapper color={color}>{children}</S.BadgeWrapper>;
};

export default Badge;
