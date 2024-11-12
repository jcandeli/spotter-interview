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
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [timerValue, setTimerValue] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prev) => prev + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addMinute = useCallback(() => {
    setTimerValue((prev) => prev + 60000); // Add 60 seconds
  }, []);

  const resetTimer = useCallback(() => {
    setTimerValue(0);
  }, []);

  return (
    <TimerContext.Provider
      value={{
        timerValue,
        currentTime,
        addMinute,
        resetTimer,
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
