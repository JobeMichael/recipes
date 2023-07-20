"use client";

import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import StyledComponentsRegistry from "~/lib/registry";
import { theme } from "~/styles/theme";
import * as S from "./Layout.styles";

interface IProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Header />
        <S.Main>
          <S.Wrapper>{children}</S.Wrapper>
        </S.Main>
        <Footer />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Layout;
