import colors from "@/styles/colors";
import {
  absoluteCenter,
  absoluteVerticalCenter,
} from "@/styles/shared/absolute";
import { flexCenter } from "@/styles/shared/flex";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "./Button.types";

export const Container = styled.button<Omit<ButtonProps, "value">>`
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
  ${flexCenter}
  ${({ size }) =>
    size === "sm"
      ? css`
          width: 7rem;
          height: 3rem;
        `
      : size === "md"
      ? css`
          width: 8.5rem;
          height: 3.3rem;
        `
      : css`
          width: 10rem;
          height: 3.5rem;
        `}
  border-radius: 10rem;
  ${({ color }) =>
    color === "primary"
      ? css`
          background: ${colors.button.background.primary};
          color: rgba(255, 255, 255, 0.5);
        `
      : css`
          background: ${colors.button.background.secondary};
          color: rgba(0, 0, 0, 0.4);
        `}
  letter-spacing: 0.5px;
  border-top: 0.5px solid rgba(255, 255, 255, 0.35);
  border-left: 0.5px solid rgba(255, 255, 255, 0.35);
  padding-left: 2.5rem;
  transition: 0.5s;
  :hover {
    padding: 0;
    padding-right: 2.5rem;
    ${({ color }) =>
      color === "primary"
        ? css`
            color: rgba(255, 255, 255, 1);
          `
        : css`
            color: rgba(0, 0, 0, 1);
          `}
    span {
      left: calc(100% - 3.3rem);
    }
    ::after {
      transform: translateX(9.5rem) skewX(30deg);
    }
  }
  ::after {
    content: " ";
    position: absolute;
    width: 5rem;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);
    transform: translateX(-9.5rem) skewX(30deg);
    transition: 0.75s ease-in-out;
  }
`;

export const ButtonValue = styled.span`
  max-width: 70%;
  overflow-wrap: break-word;
`;

export const ButtonArrow = styled.span<Pick<ButtonProps, "color">>`
  ${absoluteVerticalCenter}
  ${({ color }) =>
    color === "primary"
      ? css`
          color: ${colors.black};
        `
      : css`
          color: ${colors.white};
        `}
  left: 0.3rem;
  width: 30%;
  padding-bottom: 30%;
  border-radius: 50%;
  ${({ color }) =>
    color === "primary"
      ? css`
          background: ${colors.button.arrow.primary};
        `
      : css`
          background: ${colors.button.arrow.secondary};
        `}
  transition: 0.5s ease-in-out;
  svg {
    ${absoluteCenter}
    width: 1.5rem;
    height: 1.5rem;
  }
`;
