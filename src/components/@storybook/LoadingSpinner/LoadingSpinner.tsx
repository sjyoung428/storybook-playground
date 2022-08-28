import * as S from "./LoadingSpinner.styles";
import { LoadingSpinnerProps } from "./LoadingSpinner.types";

const LoadingSpinner = ({
  color = "primary",
  size = "md",
  ...rest
}: LoadingSpinnerProps) => {
  return (
    <S.Container size={size} {...rest}>
      {[0.1, 0.2, 0.3, 0.4, 0.5, 0.6].map((number) => (
        <S.SpinningDot color={color} key={number} delay={number} />
      ))}
    </S.Container>
  );
};

export default LoadingSpinner;
