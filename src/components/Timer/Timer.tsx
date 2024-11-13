import styled from "@emotion/styled";
import { useState } from "react";
import { useTimer } from "../../context/TimerContext";
import Button from "../Button";
import Modal from "../Modal";
import { RadialProgressBar } from "../RadialProgressBar/RadialProgressBar";
import { TimeInput } from "../TimeInput/TimeInput";

const Footer = styled.footer`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding-top: 3rem;
`;

const ProgressContainer = styled.section`
  position: relative;
`;

export const Timer = () => {
  const { startTimer, resetTimer, addMinute, stopTimer, progress } = useTimer();
  const [isOpen, setIsOpen] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const handlePlayPause = () => {
    setIsPaused(!isPaused);
    if (isPaused) {
      startTimer();
    } else {
      stopTimer();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} heading="Timer">
      <ProgressContainer>
        <TimeInput />
        <RadialProgressBar progress={progress} />
      </ProgressContainer>

      <Footer>
        <Button onClick={addMinute} variation="invisible">
          <span aria-hidden="true">+1:00</span>
          <span className="sr-only">Add 1 minute</span>
        </Button>

        <Button
          onClick={handlePlayPause}
          variation="icon"
          icon={isPaused ? "play" : "pause"}
        >
          {isPaused ? "Start" : "Pause"}
        </Button>

        <Button onClick={resetTimer} variation="invisible">
          Reset
        </Button>
      </Footer>
    </Modal>
  );
};
