import styled from "styled-components";

interface BadgeProps {
  color?: string;
}

export const BadgeWrapper = styled.span<BadgeProps>`
  background-color: ${(props) => (props.color ? props.color : "blue")};
  color: white;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 20px;
  display: inline-block;
`;
