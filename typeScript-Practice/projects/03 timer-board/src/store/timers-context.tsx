import { createContext, useContext, useReducer, type ReactNode } from "react";

// 066 - creating a context & Fitting types
// 067 - creating a type safe provider component
// 069 - getting start with useReducer
export type Timer = {
  name: string;
  duration: number;
};

// data
type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
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

// 070 - reducer function & action type
type StartTimersAction = {
  type: "START_TIMERS";
};
type StopTimersAction = {
  type: "STOP_TIMERS";
};
type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
  // 071 - changing state via Reducer function
  if (action.type === "START_TIMERS") {
    return {
      ...state,
      isRunning: true,
    };
  }

  if (action.type === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false,
    };
  }

  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }

  return state;
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  // 069 - useReducer hooks
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const context: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return (
    <TimersContext.Provider value={context}>{children}</TimersContext.Provider>
  );
}
