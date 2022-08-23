import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #ccc;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  background: linear-gradient(to left, rgb(255, 166, 166), rgb(126, 197, 255));
  height: 8px;
  width: ${({ progress }) => progress + "%"};
`;
