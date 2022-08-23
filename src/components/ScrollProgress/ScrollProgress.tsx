import { useEffect, useState } from "react";
import * as S from "./ScrollProgress.styles";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  const handleProgress = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = (totalScroll / windowHeight) * 100;
    setScroll(scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleProgress);
    return () => {
      window.removeEventListener("scroll", handleProgress);
    };
  }, [handleProgress]);
  console.log(scroll);
  return (
    <S.Container>
      <S.ProgressBar progress={scroll} />
    </S.Container>
  );
};

export default ScrollProgress;
