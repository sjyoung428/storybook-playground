import ScrollProgress from "./ScrollProgress";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "ScrollProgress",
  components: ScrollProgress,
} as ComponentMeta<typeof ScrollProgress>;

const Template: ComponentStory<typeof ScrollProgress> = (args) => (
  <div style={{ height: "200vh" }}>
    <ScrollProgress {...args} />
  </div>
);

export const ProgressArray = Template.bind({});
ProgressArray.args = {
  colors: ["rgb(255, 166, 166)", "rgb(126, 197, 255)"],
};

export const ProgressString = Template.bind({});
ProgressString.args = {
  colors: "blue",
};
