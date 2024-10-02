import { useEffect } from "react";
import { useGame } from "./use-game";
import { Container } from "@pixi/react";
import { Circle, Rectangle } from "./Shapes";

export const PlayScreen = ({ level, onSuccess, onFail }) => {
  const { engine } = useGame();

  useEffect(() => {
    // This will run every game engine tick
  }, [engine?.timing?.timestamp]);

  const bodies = engine?.world?.bodies;
  if (!bodies) {
    return <></>;
  }

  return (
    <Container>
      {bodies.map((body, i) => {
        if (body.label === "Rectangle Body") {
          return <Rectangle key={i} body={body} />;
        }

        if (body.label === "Circle Body") {
          return <Circle key={i} body={body} />;
        }
      })}
    </Container>
  );
};
