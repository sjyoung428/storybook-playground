import useScrollProgress from "@/libs/hooks/useScrollProgress";
import moveScrollProgress from "@/libs/utils/moveScrollProgress";
import { useRef } from "react";
import * as S from "./ScrollProgress.styles";
import { ScrollProgressState } from "./ScrollProgress.types";

/**
 * @param colors ScrollProgress 색상 변경
 **  string형식으로 입력 시 ex) colors="blue" => background :"blue"
 **  string[]형식으로 입력 시 ex) colors=["blue","yellow"] => background : linear-gradient(to left, "blue", "yellow")
 *
 *
 */

const ScrollProgress = ({ colors }: Pick<ScrollProgressState, "colors">) => {
  const scroll = useScrollProgress();
  const progressRef = useRef<HTMLDivElement>(null);

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX } = event;
    if (progressRef && progressRef.current) {
      const { scrollWidth } = progressRef.current;
      moveScrollProgress(clientX, scrollWidth);
    }
  };

  return (
    <S.Container onClick={onClick} ref={progressRef}>
      <S.ProgressBar colors={colors} progress={scroll} />
    </S.Container>
  );
};

export default ScrollProgress;
