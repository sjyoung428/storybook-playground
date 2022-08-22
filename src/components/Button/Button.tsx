import * as S from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({
  size = "md",
  children,
  color = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <S.Container {...rest} size={size} color={color}>
      {children}
    </S.Container>
  );
};

export default Button;
