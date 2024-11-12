import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  return (
    <Modal isOpen={true} onClose={() => {}} heading="Timer">
      <Button onClick={() => {}} variation="invisible">
        Reset
      </Button>
      <Button onClick={() => {}} variation="icon" icon="pause">
        Pause
      </Button>
    </Modal>
  );
}

export default App;
