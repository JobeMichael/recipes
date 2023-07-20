import styled from "styled-components";
import { device } from "~/styles/device";
import { ResponsiveWrapper } from "~/styles/shared";

const headerOuterHeight = 90;
const headerInnerHeight = 70;
const headerHeightDifference = headerOuterHeight - headerInnerHeight;

export const HeaderLogo = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  > span {
    @media ${device.tablet} {
      margin-left: 20px;
    }
    span {
      font-style: italic;
    }
  }

  a {
    font-weight: 600;
    color: #000;
    font-size: 1.6rem;
    text-decoration: none;

    @media ${device.tablet} {
      /* font-size: 2.25rem; */
    }
    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const HederInner = styled.div`
  ${ResponsiveWrapper}
  height: ${headerInnerHeight}px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  height: ${headerOuterHeight}px;
  position: sticky;
  top: -${headerHeightDifference}px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
`;
