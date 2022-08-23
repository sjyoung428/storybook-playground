import Modal from "./Modal";
import Button from "@/components/Button/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

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
    <>
      <Modal open={openModal} setOpen={setOpenModal} children="모달창" />
      <Button onClick={onOpenModal}>모달창 열기</Button>
    </>
  );
};

export const Default = Template.bind({});
