import { act, renderHook } from "@testing-library/react";
import { TimerProvider, useTimer } from "./TimerContext";

// Mock timer functions
jest.useFakeTimers();

describe("TimerContext", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <TimerProvider>{children}</TimerProvider>
  );

  beforeEach(() => {
    jest.clearAllTimers();
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useTimer(), { wrapper });

    expect(result.current.timerValue).toBe(60000);
    expect(result.current.currentTime).toBe(60000);
    expect(result.current.progress).toBe(100);
    expect(result.current.isRunning).toBe(false);
  });

  it("should start and stop timer", () => {
    const { result } = renderHook(() => useTimer(), { wrapper });

    act(() => {
      result.current.startTimer();
    });

    expect(result.current.isRunning).toBe(true);

    // Advance timer by 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.currentTime).toBe(58000);

    act(() => {
      result.current.stopTimer();
    });

    expect(result.current.isRunning).toBe(false);
  });

  it("should add one minute", () => {
    const { result } = renderHook(() => useTimer(), { wrapper });

    act(() => {
      result.current.addMinute();
    });

    expect(result.current.currentTime).toBe(120000); // 120000ms = 2 minutes
    expect(result.current.timerValue).toBe(120000);
  });

  it("should reset timer", () => {
    const { result } = renderHook(() => useTimer(), { wrapper });

    // Start timer and advance time
    act(() => {
      result.current.startTimer();
      jest.advanceTimersByTime(5000);
    });

    // Reset timer
    act(() => {
      result.current.resetTimer();
    });

    expect(result.current.currentTime).toBe(result.current.timerValue);
    expect(result.current.isRunning).toBe(false);
    expect(result.current.progress).toBe(100);
  });

  it("should stop at 0 and reset isRunning", () => {
    const { result } = renderHook(() => useTimer(), { wrapper });

    act(() => {
      result.current.startTimer();
      // Advance time beyond timer value
      jest.advanceTimersByTime(61000);
    });

    expect(result.current.currentTime).toBe(0);
    expect(result.current.isRunning).toBe(false);
  });

  it("should update timer value", () => {
    const { result } = renderHook(() => useTimer(), { wrapper });

    act(() => {
      result.current.setTimerValue(30000);
    });

    expect(result.current.timerValue).toBe(30000);
    expect(result.current.currentTime).toBe(30000);
  });
});
