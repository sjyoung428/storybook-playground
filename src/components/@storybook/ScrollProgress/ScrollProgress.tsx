import useScrollProgress from "@/libs/hooks/useScrollProgress";
import moveViewPoint from "@/libs/utils/moveViewPoint";
import { useRef } from "react";
import * as S from "./ScrollProgress.styles";
import { ScrollProgressState } from "./ScrollProgress.types";

/**
 *
 * @typedef {import("./ScrollProgress.types").ScrollProgressState} ScrollProgressState
 * @param {ScrollProgressState} props
 * @param [props.colors] ScrollProgress 색상 변경
 **  string형식으로 입력 시 ex) colors="blue" => background :"blue"
 **  string[]형식으로 입력 시 ex) colors=["blue","yellow"] => background : linear-gradient(to left, "blue", "yellow")
 *
 *
 */

const ScrollProgress = ({
  colors,
  ...rest
}: Omit<ScrollProgressState, "progress">) => {
  const scroll = useScrollProgress();
  const progressRef = useRef<HTMLDivElement>(null);

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX } = event;
    if (progressRef && progressRef.current) {
      const { scrollWidth } = progressRef.current;
      moveViewPoint(clientX, scrollWidth);
    }
  };

  return (
    <S.Container {...rest} onClick={onClick} ref={progressRef}>
      <S.ProgressBar colors={colors} progress={scroll} />
    </S.Container>
  );
};

export default ScrollProgress;
