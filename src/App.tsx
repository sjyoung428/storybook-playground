import Button from "@/components/Button/Button";

function App() {
  return (
    <>
      <div style={{ padding: "1rem 2rem" }}>
        <Button style={{ marginBottom: "5px" }} size="sm" color="primary">
          sm primary
        </Button>
        <Button style={{ marginBottom: "5px" }}>md primary</Button>
        <Button color="secondary" size="lg">
          lg secondary
        </Button>
      </div>
    </>
  );
}

export default App;
