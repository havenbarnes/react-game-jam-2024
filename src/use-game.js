import { useEffect, useState } from "react";
import { FRAMES_PER_SECOND } from "./game/constants";
import {
  Bodies,
  Common,
  Composite,
  Composites,
  Engine,
  Runner,
} from "matter-js";

export const useGame = () => {
  const [engine, setEngine] = useState();

  useEffect(() => {
    const engine = Engine.create({
      gravity: {
        y: 0.01,
        x: 0,
      },
    });
    setEngine(engine);
    const runner = Runner.create({
      delta: 1000 / 100,
      isFixed: false,
      enabled: true,
    });

    Runner.run(runner, engine);

    Composite.add(engine.world, [
      // Game walls
      // Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      // Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      // Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      // Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),

      Bodies.circle(50, 100, 25),
      Bodies.rectangle(10, 200, 500, 10, { isStatic: true })
    ]);

    setEngine(engine);

    return () => Engine.clear(engine);
  }, []);

  return { engine };
};
