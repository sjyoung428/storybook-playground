import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ScrollProgressState } from "./ScrollProgress.types";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #ccc;
`;

export const ProgressBar = styled.div<ScrollProgressState>`
  ${({ colors }) =>
    Array.isArray(colors)
      ? css`
          background: linear-gradient(to left, ${colors.join(",")});
        `
      : css`
          background: ${colors};
        `}

  /* background: linear-gradient(to left, rgb(255, 166, 166), rgb(126, 197, 255)); */
  height: 0.5rem;
  width: ${({ progress }) => progress + "%"};
`;
