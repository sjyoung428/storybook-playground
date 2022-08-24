import useScrollProgress from "@/hooks/useScrollProgress";
import { useRef } from "react";
import * as S from "./ScrollProgress.styles";

const ScrollProgress = () => {
  const scroll = useScrollProgress();
  const progressRef = useRef<HTMLDivElement>(null);

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (progressRef && progressRef.current) {
      const { clientX } = event;
      const { scrollWidth } = progressRef.current;
      window.scrollTo({
        top: window.innerHeight * (clientX / scrollWidth),
        behavior: "smooth",
      });
    }
  };

  return (
    <S.Container onClick={onClick} ref={progressRef}>
      <S.ProgressBar progress={scroll} />
    </S.Container>
  );
};

export default ScrollProgress;
