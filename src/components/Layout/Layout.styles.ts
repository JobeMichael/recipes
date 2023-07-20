import styled, { createGlobalStyle } from "styled-components";
import { ResponsiveWrapper } from "~/styles/shared";

export const Main = styled.main`
  margin: 3rem 0;
  min-height: calc(100vh - 140px - 4rem);
`;

export const Wrapper = styled.div`
  ${ResponsiveWrapper}
`;

export const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;

`;
