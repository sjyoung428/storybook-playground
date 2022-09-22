import { useState } from "@storybook/addons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useRef } from "react";
import Button from "../Button/Button";
import Cursor from "./Cursor";

export default {
  title: "Cusor",
  component: Cursor,
} as ComponentMeta<typeof Cursor>;

const Template: ComponentStory<typeof Cursor> = () => {
  const [isHover, setIsHover] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div style={{ width: "100vw", height: "100vh" }} ref={divRef}>
      <Button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        children="버튼"
      />
      <Cursor containerRef={divRef} isHover={isHover} />
    </div>
  );
};

export const Default = Template.bind({});
