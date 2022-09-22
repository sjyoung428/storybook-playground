import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const OuterCursor = styled.div<{ x?: number; y?: number }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 30px;
  height: 30px;
  margin-left: -15px;
  margin-top: -15px;
  border: 2px solid #ced0d4;
  border-radius: 50%;

  ${({ x, y }) =>
    x &&
    y &&
    css`
      transform: translate(${x + "px"}, ${y + "px"});
    `}
  transition: all 0.08s ease-out;

  pointer-events: none;
`;

export const InnerCursor = styled.div<{
  x?: number;
  y?: number;
  isHover: boolean;
}>`
  position: fixed;
  left: 0;
  top: 0;
  ${({ isHover }) =>
    isHover
      ? css`
          height: 48px;
          width: 48px;
          margin-left: -24px;
          margin-top: -24px;
          opacity: 0.3;
        `
      : css`
          height: 6px;
          width: 6px;
          margin-left: -3px;
          margin-top: -3px;
        `}

  background-color: #ced0d4;
  border-radius: 50%;
  ${({ x, y }) =>
    x &&
    y &&
    css`
      transform: translate(${x + "px"}, ${y + "px"});
    `}
  pointer-events: none;
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
    margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
