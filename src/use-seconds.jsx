import { useEffect, useState } from "react";
import { FRAMES_PER_SECOND } from "./game/constants";

const padZeroes = (time) => {
  if (time.toString().length === 1) {
    return `0${time}`;
  }
  return time;
};

export const formatSeconds = (seconds) =>
  `${padZeroes(Math.floor(seconds / 60))}:${padZeroes(seconds % 60)}`;

export const useSeconds = () => {
  const [seconds, setSeconds] = useState(0);
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const secondsIntervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    const ticksIntervalId = setInterval(() => {
      setTicks((prevTicks) => prevTicks + 1);
    }, 1000 / FRAMES_PER_SECOND);

    return () => {
      clearInterval(secondsIntervalId);
      clearInterval(ticksIntervalId);
    };
  }, []);

  const formattedTime = formatSeconds(seconds);

  return {
    seconds,
    ticks,
    formattedTime,
  };
};
