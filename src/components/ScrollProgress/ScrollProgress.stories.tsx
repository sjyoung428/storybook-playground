import ScrollProgress from "./ScrollProgress";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "ScrollProgress",
  components: ScrollProgress,
} as ComponentMeta<typeof ScrollProgress>;

const Template: ComponentStory<typeof ScrollProgress> = () => (
  <div style={{ height: "200vh" }}>
    <ScrollProgress />
  </div>
);

export const Default = Template.bind({});
