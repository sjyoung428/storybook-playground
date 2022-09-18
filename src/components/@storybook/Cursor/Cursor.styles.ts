import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const OuterCursor = styled.div<{ x?: number; y?: number }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 2rem;
  height: 2rem;
  margin-left: -1rem;
  margin-top: -1rem;
  border: 2px solid #ced0d4;
  border-radius: 50%;

  ${({ x, y }) =>
    x &&
    y &&
    css`
      transform: translate(${x + "px"}, ${y + "px"});
    `}
  transition: all 0.08s ease-out;
  z-index: -999;
`;

export const InnerCursor = styled.div<{ x?: number; y?: number }>`
  position: fixed;
  left: 0;
  top: 0;
  height: 0.4rem;
  width: 0.4rem;
  margin-left: -0.2rem;
  margin-top: -0.2rem;
  background-color: #ced0d4;
  border-radius: 50%;
  ${({ x, y }) =>
    x &&
    y &&
    css`
      transform: translate(${x + "px"}, ${y + "px"});
    `}
  z-index: -999
`;
