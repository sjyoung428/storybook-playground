import useScrollProgress from "@/hooks/useScrollProgress";
import { useEffect, useState } from "react";
import * as S from "./ScrollProgress.styles";

const ScrollProgress = () => {
  const scroll = useScrollProgress();
  return (
    <S.Container>
      <S.ProgressBar progress={scroll} />
    </S.Container>
  );
};

export default ScrollProgress;
