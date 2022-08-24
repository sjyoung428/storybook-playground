import useScrollProgress from "@/libs/hooks/useScrollProgress";
import moveScrollProgress from "@/libs/utils/moveScrollProgress";
import { useRef } from "react";
import * as S from "./ScrollProgress.styles";

const ScrollProgress = () => {
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
      <S.ProgressBar progress={scroll} />
    </S.Container>
  );
};

export default ScrollProgress;
