import { useEffect } from "react";
import { useGame } from "./use-game";

export const PlayScreen = ({ level, onSuccess, onFail }) => {
  const { engine } = useGame();

  useEffect(() => {
    // This will run every game engine tick
    console.log({ engine });
    console.log({ rectanglePositions: engine?.world?.bodies });
  }, [engine?.timing?.timestamp]);

  // TODO: Map the engine's bodies positions to Reactpixi bodies

  return <></>;
};
