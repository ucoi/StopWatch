import React, { useState, useEffect, useRef } from "react";
function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setelapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {}, [isRunning]);

  function Start() {}
  function Stop() {}
  function Reset() {}
  function FormatTime() {
    return "00:00:00";
  }

  return (
    <>
      <div className="stopwatch">
        <div className="display">{FormatTime()}</div>
        <div className="controls">
          <button className="start-button" onClick={Start}>
            Start
          </button>
          <button className="stop-button" onClick={stop}>
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
