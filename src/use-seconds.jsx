import { useEffect, useState } from "react";

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

  useEffect(() => {
    const secondsIntervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(secondsIntervalId);
    };
  }, []);

  const formattedTime = formatSeconds(seconds);

  return {
    seconds,

    formattedTime,
  };
};
