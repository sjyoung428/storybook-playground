import Modal from "./Modal";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ScrollProgress from "@/components/@storybook/ScrollProgress/ScrollProgress";
import ModalExample from "@/components/@Example/Modal/ModalExample";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  return (
    <div style={{ height: "200vh" }}>
      <ScrollProgress colors="blue" />
      <ModalExample />
    </div>
  );
};

export const Default = Template.bind({});
