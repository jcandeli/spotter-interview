import { useState } from "react";
import { useTimer } from "../../context/TimerContext";
import Button from "../Button";
import Modal from "../Modal";

export const Timer = () => {
  const { addMinute, resetTimer } = useTimer();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} heading="Timer">
      <Button onClick={resetTimer} variation="invisible">
        Reset
      </Button>
      <Button onClick={addMinute} variation="icon" icon="play">
        Play
      </Button>
    </Modal>
  );
};
