import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`;

export const CancleButton = styled.button`
  text-align: end;
`;

export const Content = styled.p`
  line-height: 1.5rem;
`;
