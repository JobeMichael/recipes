import * as S from "./Header.styles";

const Header = () => {
  return (
    <S.Header data-testid="header">
      <S.HederInner>
        <S.HeaderLogo>
          <a href="/">
            Marley spoon <span>recipe</span>
          </a>
        </S.HeaderLogo>
      </S.HederInner>
    </S.Header>
  );
};

export default Header;
