import React from "react";
import * as S from "./Button.styled";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: React.ReactNode;
  bgcolor?: {
    default: string;
    hover: string;
  };
  fullWidth?: boolean;
}

const Button: React.FC<IProps> = ({
  disabled,
  children,
  bgcolor,
  fullWidth = false,
  ...rest
}) => (
  <S.Button
    bgcolor={bgcolor}
    disabled={disabled}
    {...rest}
    fullwidth={fullWidth}
  >
    {children}
  </S.Button>
);

export default Button;
