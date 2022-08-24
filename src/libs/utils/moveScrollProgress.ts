/**
 *
 * @param clientX - x 좌표
 * @param scrollWidth - ScrollProgress의 최대 길이
 */

const moveScrollProgress = (clientX: number, scrollWidth: number) => {
  window.scrollTo({
    top: window.innerHeight * (clientX / scrollWidth),
    behavior: "smooth",
  });
};

export default moveScrollProgress;
