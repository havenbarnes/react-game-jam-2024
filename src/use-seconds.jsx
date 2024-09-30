import { useEffect, useState } from "react";

const padZeroes = (time) => {
  if (time.toString().length === 1) {
    return `0${time}`;
  }
  return time;
};

export const useSeconds = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = `${padZeroes(Math.floor(seconds / 60))}:${padZeroes(
    seconds % 60
  )}`;

  return {
    seconds,
    formattedTime,
  };
};
