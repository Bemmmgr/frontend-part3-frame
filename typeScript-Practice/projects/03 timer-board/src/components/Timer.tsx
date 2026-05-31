import Container from "./UI/Container.tsx";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";
import { useEffect, useRef, useState } from "react";

// 073 -
export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  // 075 - creating first side effect
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  // 078 - useEffect & its dependencies
  const { isRunning } = useTimersContext();

  // 077 - managing interval with Refs & cleanup func
  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  // 076 - using useEffect
  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => prevTime - 50);
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
