import { ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  id: string;
}

const Portal = ({ children, id }: PortalProps) => {
  const container = document.getElementById(id) as HTMLElement;

  return createPortal(children, container);
};

export default Portal;
