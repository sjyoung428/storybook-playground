import Modal from "./Modal";
import Button from "@/components/@storybook/Button/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import ScrollProgress from "@/components/@storybook/ScrollProgress/ScrollProgress";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div style={{ height: "200vh" }}>
      <ScrollProgress colors="blue" />
      <Modal open={openModal} setOpen={setOpenModal} children="모달창" />
      <Button style={{ marginTop: "20%" }} onClick={onOpenModal}>
        모달창
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
