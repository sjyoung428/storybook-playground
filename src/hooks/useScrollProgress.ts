import { useEffect, useState } from "react";

const useScrollProgress = () => {
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
  return scroll;
};
export default useScrollProgress;
