import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  target: string;
}

const Portal = ({ children, target }: PortalProps) => {
  const container = document.getElementById(target) as HTMLElement;

  return createPortal(children, container);
};

export default Portal;
