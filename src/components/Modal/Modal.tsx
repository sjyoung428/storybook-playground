import * as S from "./Modal.styles";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { ModalProps } from "./Modal.types";

const Modal = ({ open = false, setOpen, children }: ModalProps) => {
  const modalRoot = document.querySelector("#modal") as HTMLElement;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const onCancel = () => {
    setOpen(false);
  };

  return ReactDOM.createPortal(
    <>
      {open ? (
        <S.Container>
          <S.Background onClick={onCancel} />
          <S.Modal>{children}</S.Modal>
        </S.Container>
      ) : null}
    </>,
    modalRoot
  );
};

export default Modal;
