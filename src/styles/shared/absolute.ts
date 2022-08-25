import { css } from "@emotion/react";

export const absoluteVerticalCenter = css`
  position: absolute;
  top: 50%;
  bottom: 50%;
  transform: translate(0, -50%);
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
