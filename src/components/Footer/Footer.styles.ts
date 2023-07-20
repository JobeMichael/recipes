import styled from "styled-components";
import { ResponsiveWrapper } from "~/styles/shared";

export const FooterInner = styled.div`
  ${ResponsiveWrapper}
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;
