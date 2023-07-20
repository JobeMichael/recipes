import styled from "styled-components";

export const Button = styled.button<{
  bgcolor?: {
    default: string;
    hover: string;
  };
  fullwidth?: boolean;
}>`
  background-color: ${(props) =>
    props.bgcolor?.default || props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};

  &:hover {
    background-color: ${(props) =>
      props.bgcolor?.hover || props.theme.colors.primaryLight};
  }
`;
