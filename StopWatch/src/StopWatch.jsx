import React, { useState, useEffect, useRef } from "react";
function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setelapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  return <></>;
}

export default StopWatch;
