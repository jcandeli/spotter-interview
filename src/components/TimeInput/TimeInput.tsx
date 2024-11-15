import styled from "@emotion/styled";
import Cleave from "cleave.js/react";
import { useTimer } from "../../context/TimerContext/TimerContext";
import { formatTime, parseTime } from "../../utils";

const Input = styled(Cleave)`
  border: none;
  background: none;
  color: var(--primary-color);
  font-size: 4rem;
  width: 10rem;
  :focus {
    outline: currentColor dotted 2px;
    outline-offset: 4px;
  }
`;

const InputContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const TimeInput = () => {
  const { currentTime, setTimerValue, stopTimer } = useTimer();
  return (
    <InputContainer>
      <label htmlFor="timer-input" className="sr-only">
        Time
      </label>
      <Input
        id="timer-input"
        type="text"
        placeholder="mm:ss"
        value={formatTime(currentTime)}
        onFocus={stopTimer}
        onChange={(e) => setTimerValue(parseTime(e.target.value))}
        options={{
          time: true,
          timePattern: ["m", "s"],
        }}
      />
    </InputContainer>
  );
};
