import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface TimerContextType {
  timerValue: number;
  currentTime: number;
  progress: number;
  setTimerValue: (value: number) => void;
  addMinute: () => void;
  resetTimer: () => void;
  startTimer: () => void;
  stopTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [timerValue, setTimerValue] = useState(60000);
  const [currentTime, setCurrentTime] = useState(60000);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(100);

  // Update current time every second
  useEffect(() => {
    let interval: number;

    if (isRunning && currentTime > 0) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev <= 0) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1000;
        });

        // Update progress
        setProgress(() => {
          const percentage = (currentTime / timerValue) * 100;
          return percentage < 0 ? 0 : percentage;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning, currentTime, timerValue]);

  // Update current time when timer value changes
  useEffect(() => {
    setCurrentTime(timerValue);
  }, [timerValue]);

  const addMinute = () => {
    setTimerValue((prev) => prev + 60000); // Add 60 seconds
    setCurrentTime((prev) => prev + 60000);
  };

  const resetTimer = () => {
    setCurrentTime(timerValue);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <TimerContext.Provider
      value={{
        timerValue,
        setTimerValue,
        currentTime,
        progress,
        addMinute,
        resetTimer,
        startTimer,
        stopTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = (): TimerContextType => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};
