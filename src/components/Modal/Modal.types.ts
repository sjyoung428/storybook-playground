import { ReactNode } from "react";

export interface ModalProps {
  open?: boolean;
  setOpen: (boolean: boolean) => void;
  children: ReactNode;
}
