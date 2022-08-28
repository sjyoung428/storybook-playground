import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";

export default {
  title: "LoadingSpinner",
  compoents: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = (args) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoadingSpinner {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};
