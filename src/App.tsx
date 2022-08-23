import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ padding: "1rem 2rem", height: "200vh" }}>
        <Button size="sm" color="primary">
          sm primary
        </Button>
        <br />
        <br />
        <Button>md primary</Button>
        <br />
        <br />
        <Button color="secondary" size="lg">
          lg secondary
        </Button>
        <br />
        <br />
        {/** 모달 */}
        {open && <Modal open={open} setOpen={setOpen} children="hello" />}
        <Button onClick={() => setOpen(true)}>open modal</Button>
      </div>
    </>
  );
}

export default App;
