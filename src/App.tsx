import Button from "@/components/@storybook/Button/Button";
import { useRef, useState } from "react";
import ModalExample from "./components/@Example/Modal/ModalExample";
import Cursor from "./components/@storybook/Cursor/Cursor";
import LoadingSpinner from "./components/@storybook/LoadingSpinner/LoadingSpinner";
import ScrollProgress from "./components/@storybook/ScrollProgress/ScrollProgress";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div ref={containerRef} style={{ padding: "1rem 2rem", height: "200vh" }}>
        <ScrollProgress colors={["rgb(255, 166, 166)", "rgb(126, 197, 255)"]} />
        <Button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          color="secondary"
          children="버튼"
        />
        <br />
        <br />
        <LoadingSpinner size="sm" color="secondary" />
        <br />

        <ModalExample setIsHover={setIsHover} />
        <Cursor isHover={isHover} containerRef={containerRef} />
      </div>
    </>
  );
}

export default App;
