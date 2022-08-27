import { css } from "@emotion/react";
import { fadeIn } from "../keyframes/fadeIn";
import { fadeOut } from "../keyframes/fadeOut";

export const modalAnimation = (open: boolean) => css`
  visibility: ${open ? "visible" : "hidden"};
  z-index: 15;
  animation: ${open ? fadeIn : fadeOut} 0.3s ease-out;
  transition: visibility 0.3s ease-out;
`;
