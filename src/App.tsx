import Button from "@/components/Button/Button";

function App() {
  return (
    <>
      <div style={{ padding: "1rem 2rem" }}>
        <Button size="sm" color="primary">
          sm primary
        </Button>
        <br />
        <Button>md primary</Button>
        <br />
        <Button color="secondary" size="lg">
          lg secondary
        </Button>
      </div>
    </>
  );
}

export default App;
