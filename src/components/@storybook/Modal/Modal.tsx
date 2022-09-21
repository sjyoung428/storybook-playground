import * as S from "./Modal.styles";
import { ModalProps } from "./Modal.types";
import { useEffect, useState } from "react";
import Portal from "@/components/Portal/Portal";

/**
 * @typedef {import("./Modal.types").ModalProps} ModalProps
 * @param {ModalProps} props
 * @param  [props.open] - true일 때 모달이 열리고 false이면 모달이 닫힌다.
 * @param  [props.setOpen] - open의 상태를 변경하는 setState 배경을 클릭하면 모달창이 꺼진다.
 * @param  [props.children] - 모달창 안에 나타나는 요소
 *
 */

const Modal = ({ open = false, setOpen, children, ...rest }: ModalProps) => {
  const [visible, setVisible] = useState(false);

  const onCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    let visibleId: NodeJS.Timeout;
    if (open) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      visibleId = setTimeout(() => setVisible(false), 300);
      document.body.style.overflow = "unset";
    }
    return () => clearTimeout(visibleId);
  }, [open]);

  return (
    <Portal target="modal">
      {visible ? (
        <S.Container open={open}>
          <S.Background onClick={onCancel} />
          <S.ModalElement {...rest}>{children}</S.ModalElement>
        </S.Container>
      ) : null}
    </Portal>
  );
};

export default Modal;
