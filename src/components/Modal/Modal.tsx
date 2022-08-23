import * as S from "./Modal.styles";
import ReactDOM from "react-dom";
import React, { ReactNode, useEffect } from "react";

interface ModalProps {
  open?: boolean;
  setOpen: (boolean: boolean) => void;
  children: ReactNode;
}

const Modal = ({ open = false, setOpen, children }: ModalProps) => {
  const modalRoot = document.querySelector("#modal") as HTMLElement;

  const onCancel = () => {
    setOpen(false);
  };

  return ReactDOM.createPortal(
    <>
      {open ? (
        <>
          <S.Background onClick={onCancel} />
          <S.Modal>{children}</S.Modal>
        </>
      ) : null}
    </>,
    modalRoot
  );
};

export default Modal;
