import { useTimer } from "../../context/TimerContext/TimerContext";
import { formatTime, parseTime } from "../../utils";

export const TimeInput = () => {
  const { currentTime, setTimerValue } = useTimer();
  // TODO: add validation
  return (
    <>
      <label htmlFor="timer-input">Time</label>
      <input
        id="timer-input"
        type="text"
        defaultValue={formatTime(currentTime)}
        onBlur={(e) => setTimerValue(parseTime(e.target.value))}
      />
    </>
  );
};
