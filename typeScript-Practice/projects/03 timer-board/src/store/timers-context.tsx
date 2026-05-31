import { createContext, useContext, type ReactNode } from "react";

// 066 - creating a context & Fitting types
// 067 - creating a type safe provider component
type Timer = {
  name: string;
  duration: number;
};

// data
type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

// methods
type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersContext = useContext(TimersContext);

  if (timersContext === null) {
    throw new Error("TimersContext should not be null");
  }

  return timersContext;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const context: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {},
    startTimers() {},
    stopTimers() {},
  };

  return (
    <TimersContext.Provider value={context}>{children}</TimersContext.Provider>
  );
}
