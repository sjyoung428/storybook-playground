import colors from "@/styles/colors";
import { fixedHorizontalCenter } from "@/styles/shared/fixed";
import { flexCenter } from "@/styles/shared/flex";
import styled from "@emotion/styled";

export const Container = styled.div``;

export const Background = styled.div`
  ${flexCenter}
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background-color: ${colors.black};
  opacity: 0.3;
`;

export const Modal = styled.div`
  width: 30%;
  height: 30%;
  background: ${colors.black};
  color: ${colors.white};
  border-radius: 0.2rem;
  padding: 2rem 2rem;
  ${fixedHorizontalCenter};
  top: 20%;
`;
