import Button from "@/components/@storybook/Button/Button";
import Modal from "@/components/@storybook/Modal/Modal";
import { useState } from "react";
import ScrollProgress from "./components/@storybook/ScrollProgress/ScrollProgress";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ padding: "1rem 2rem", height: "200vh" }}>
        <ScrollProgress colors={["rgb(255, 166, 166)", "rgb(126, 197, 255)"]} />
        <Button color="secondary" children="버튼" />
        <br />
        <br />
        {/** 모달 */}
        <Modal open={open} setOpen={setOpen}>
          모달
        </Modal>
        <Button onClick={() => setOpen(true)}>open modal</Button>
      </div>
    </>
  );
}

export default App;
