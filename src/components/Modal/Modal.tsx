import * as S from "./Modal.styles";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { ModalProps } from "./Modal.types";

/**
 *
 * @param {boolean} open - true일 때 모달이 열리고 false이면 모달이 닫힌다.
 * @param {Pick<ModalProps,"setOpen">} setOpen - open의 상태를 변경하는 setState 배경을 클릭하면 모달창이 꺼진다.
 * @param {ReactNode} children - 모달창 안에 나타나는 요소
 *
 */

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
