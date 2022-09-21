import Button from "@/components/@storybook/Button/Button";
import Modal from "@/components/@storybook/Modal/Modal";
import { useState } from "react";
import * as S from "./ModalExample.styles";

interface ModalExampleProps {
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalExample = ({ setIsHover }: ModalExampleProps) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal}>
        <S.Container>
          <S.Header>
            <div /> <S.Title>Lorem ipsum</S.Title>
            <div style={{ textAlign: "end" }}>
              <S.CancleButton onClick={() => setOpenModal(false)}>
                ❌
              </S.CancleButton>
            </div>
          </S.Header>
        </S.Container>
        <S.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </S.Content>
      </Modal>
      <Button
        style={{ marginTop: "10%" }}
        onClick={() => setOpenModal(true)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        모달 열기
      </Button>
    </>
  );
};

export default ModalExample;
