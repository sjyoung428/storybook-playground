import { modalAnimation } from "@/styles/animations/modalAnimaion";
import colors from "@/styles/colors";
import { fixedHorizontalCenter } from "@/styles/shared/fixed";
import { flexCenter } from "@/styles/shared/flex";
import styled from "@emotion/styled";

export const Container = styled.div<{ open: boolean }>`
  ${({ open }) => modalAnimation(open)}
`;

export const Background = styled.div`
  ${flexCenter}
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  /* background-color: ${colors.black};
  opacity: 0.15; */
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
`;

export const Modal = styled.div`
  width: 30%;
  height: 30%;
  background: ${colors.white};
  color: ${colors.black};
  border-radius: 0.2rem;
  padding: 2rem 2rem;
  ${fixedHorizontalCenter};
  top: 20%;
`;
