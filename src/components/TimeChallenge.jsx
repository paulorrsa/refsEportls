import { React, useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(() =>
    targetTime && !isNaN(targetTime) ? targetTime * 1000 : 0
  );

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => {
        if (typeof prevTimeRemaining !== "number" || isNaN(prevTimeRemaining)) {
          clearInterval(timer.current);
          return 0;
        }
        const newTime = prevTimeRemaining - 10;
        if (newTime <= 0) {
          clearInterval(timer.current);
          dialog.current.open();
          return 0;
        }
        return newTime;
      });
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running ..." : "Time inactive"}
        </p>
      </section>
    </>
  );
}
