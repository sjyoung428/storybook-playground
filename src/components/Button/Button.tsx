import SVGArrowRight from "../Svg/SVGArrowRight";
import * as S from "./Button.styles";
import { ButtonProps } from "./Button.types";

/**
 *
 * @param size - 버튼 사이즈 조정 "sm" | "md" | "lg"
 * @param color - 버튼 색상 "primary" | "secondary"
 *
 */

const Button = ({
  size = "md",
  color = "primary",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container {...rest} size={size} color={color}>
      <S.ButtonValue>{children}</S.ButtonValue>
      <S.ButtonArrow color={color}>
        <SVGArrowRight />
      </S.ButtonArrow>
    </S.Container>
  );
};

export default Button;
