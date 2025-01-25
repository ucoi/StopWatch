import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function Start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function Stop() {
    setIsRunning(false);
  }

  function Reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function FormatTime() {
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let millis = Math.floor((elapsedTime % 1000) / 10);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    millis = millis.toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}:${millis}`;
  }

  return (
    <>
      <div className="stopwatch">
        <div className="display">{FormatTime()}</div>
        <div className="controls">
          <button className="start-button" onClick={Start}>
            Start
          </button>
          <button className="stop-button" onClick={Stop}>
            Stop
          </button>
          <button className="reset-button" onClick={Reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
