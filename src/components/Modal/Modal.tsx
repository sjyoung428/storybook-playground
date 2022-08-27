import * as S from "./Modal.styles";
import ReactDOM from "react-dom";
import { ModalProps } from "./Modal.types";

/**
 *
 * @param {boolean} open - true일 때 모달이 열리고 false이면 모달이 닫힌다.
 * @param {Pick<ModalProps,"setOpen">} setOpen - open의 상태를 변경하는 setState 배경을 클릭하면 모달창이 꺼진다.
 * @param {ReactNode} children - 모달창 안에 나타나는 요소
 *
 */

const Modal = ({ open = false, setOpen, children, ...rest }: ModalProps) => {
  const modalRoot = document.querySelector("#modal") as HTMLElement;

  if (open) {
    document.body.style.overflow = "hidden";
  }

  const onCancel = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };

  return ReactDOM.createPortal(
    <>
      {open ? (
        <S.Container>
          <S.Background onClick={onCancel} />
          <S.Modal {...rest}>{children}</S.Modal>
        </S.Container>
      ) : null}
    </>,
    modalRoot
  );
};

export default Modal;
