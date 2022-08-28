import Modal from "./Modal";
import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Button from "../Button/Button";
import ScrollProgress from "../ScrollProgress/ScrollProgress";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div style={{ height: "200vh" }}>
      <ScrollProgress colors={["rgb(255, 166, 166)", "rgb(126, 197, 255)"]} />
      <Modal open={openModal} setOpen={setOpenModal}>
        <Container>
          <Header>
            <div /> <Title>Lorem ipsum</Title>
            <div style={{ textAlign: "end" }}>
              <CancleButton onClick={() => setOpenModal(false)}>
                ❌
              </CancleButton>
            </div>
          </Header>
        </Container>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Content>
      </Modal>
      <Button style={{ marginTop: "10%" }} onClick={() => setOpenModal(true)}>
        모달 열기
      </Button>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin-bottom: 2rem;
`;

const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`;

const CancleButton = styled.button`
  text-align: end;
`;

const Content = styled.p`
  line-height: 1.5rem;
`;

export const Default = Template.bind({});
