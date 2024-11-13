import styled from "@emotion/styled";
import { useTimer } from "../../context/TimerContext/TimerContext";
import { formatTime, parseTime } from "../../utils";

const Input = styled.input`
  border: none;
  background: none;
  color: var(--primary-color);
  font-size: 4rem;
  :focus {
    outline: currentColor dotted 2px;
    outline-offset: 4px;
  }
`;

export const TimeInput = () => {
  const { currentTime, setTimerValue, stopTimer } = useTimer();
  // TODO: add validation
  return (
    <>
      <label htmlFor="timer-input" className="sr-only">
        Time
      </label>
      <Input
        id="timer-input"
        type="text"
        pattern="^\d{2}:\d{2}$"
        value={formatTime(currentTime)}
        onFocus={stopTimer}
        onChange={(e) => setTimerValue(parseTime(e.target.value))}
      />
    </>
  );
};
