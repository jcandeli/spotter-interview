import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

interface TimerContextType {
  timerValue: number;
  currentTime: number;
  addMinute: () => void;
  resetTimer: () => void;
  startTimer: () => void;
  stopTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [timerValue, setTimerValue] = useState(60000);
  const [currentTime, setCurrentTime] = useState(60000);
  const [isRunning, setIsRunning] = useState(false);

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
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning, currentTime]);

  const addMinute = useCallback(() => {
    setTimerValue((prev) => prev + 60000); // Add 60 seconds
  }, []);

  const resetTimer = useCallback(() => {
    setCurrentTime(timerValue);
  }, [timerValue]);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  return (
    <TimerContext.Provider
      value={{
        timerValue,
        currentTime,
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
