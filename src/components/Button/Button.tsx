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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </S.ButtonArrow>
    </S.Container>
  );
};

export default Button;
