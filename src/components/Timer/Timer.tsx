import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { useTimer } from "../../context/TimerContext";
import { formatTime } from "../../utils";
import Button from "../Button";
import Modal from "../Modal";
import Text from "../Text";

const ScreanReaderOnly = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

const Footer = styled.footer`
  display: flex;
  gap: 1rem;
`;

export const Timer = () => {
  const { startTimer, resetTimer, addMinute, currentTime, stopTimer } =
    useTimer();
  const [isOpen, setIsOpen] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const handlePlayPause = useCallback(() => {
    setIsPaused(!isPaused);
    if (isPaused) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [isPaused, startTimer, stopTimer]);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} heading="Timer">
      <div>
        <Text>{formatTime(currentTime)}</Text>
      </div>

      <Footer>
        <Button onClick={addMinute} variation="invisible">
          + 1:00
          <ScreanReaderOnly>Add 1 minute</ScreanReaderOnly>
        </Button>

        <Button
          onClick={handlePlayPause}
          variation="icon"
          icon={isPaused ? "play" : "pause"}
        >
          {isPaused ? "Play" : "Pause"}
        </Button>

        <Button onClick={resetTimer} variation="invisible">
          Reset
        </Button>
      </Footer>
    </Modal>
  );
};
