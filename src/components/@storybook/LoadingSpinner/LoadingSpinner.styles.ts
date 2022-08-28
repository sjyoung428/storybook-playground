import colors from "@/styles/colors";
import {
  beforeKeyframes,
  containerKeyframes,
  spinningDotKeyframes,
} from "@/styles/keyframes/loadingSpinner";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div<{ size: "sm" | "md" | "lg" }>`
  ${({ size }) =>
    size === "sm"
      ? css`
          width: 2rem;
          height: 2rem;
        `
      : size === "md"
      ? css`
          width: 3rem;
          height: 3rem;
        `
      : css`
          width: 4rem;
          height: 4rem;
        `}
  position: relative;
  animation: ${containerKeyframes} 2.5s infinite linear both;
`;

export const SpinningDot = styled.div<{
  delay: number;
  color: "primary" | "secondary";
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;

  animation: ${spinningDotKeyframes} 2s infinite ease-in-out both;
  animation-delay: ${({ delay }) => -1.2 + delay + "s"};
  ::before {
    content: " ";
    display: block;
    width: 25%;
    height: 25%;
    background-color: ${({ color }) =>
      color === "primary" ? colors.white : colors.black};
    border-radius: 50%;
    animation: ${beforeKeyframes} 2s infinite ease-in-out both;
    animation-delay: ${({ delay }) => -1.2 + delay + "s"};
  }
`;
