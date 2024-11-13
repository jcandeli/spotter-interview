import styled from "@emotion/styled";
import { useTimer } from "../../context/TimerContext";
import Button from "../Button";
import Modal from "../Modal";
import { RadialProgressBar } from "../RadialProgressBar/RadialProgressBar";
import { TimeInput } from "../TimeInput/TimeInput";

const Footer = styled.footer`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding-top: 2rem;
`;

const ProgressContainer = styled.section`
  position: relative;
  padding: 2rem 0;
`;

interface TimerProps {
  isOpen?: boolean;
  onClose: () => void;
}

export const Timer = ({ isOpen = true, onClose }: TimerProps) => {
  const { startTimer, resetTimer, addMinute, stopTimer, progress, isRunning } =
    useTimer();

  const handlePlayPause = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} heading="Timer">
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
          icon={isRunning ? "pause" : "play"}
          iconLabel={isRunning ? "Pause" : "Start"}
        >
          {isRunning ? "Pause" : "Start"}
        </Button>

        <Button onClick={resetTimer} variation="invisible">
          Reset
        </Button>
      </Footer>
    </Modal>
  );
};
