import colors from "@/styles/colors";
import { flexCenter } from "@/styles/shared/flex";
import styled from "@emotion/styled";

export const Container = styled.div``;

export const Background = styled.div`
  ${flexCenter}
  max-height: 100vh;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background-color: rgba(1, 1, 1, 0.2);
`;

export const Modal = styled.div`
  width: 30%;
  height: 30%;
  background: ${colors.black};
  color: ${colors.white};
  border-radius: 0.2rem;
  padding: 2rem 2rem;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
`;
