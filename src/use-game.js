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
      delta: 1000 / 60,
      isFixed: false,
      enabled: true,
    });

    Runner.run(runner, engine);

    // add bodies
    var stack = Composites.stack(20, 20, 10, 5, 0, 0, function (x, y) {
      var sides = Math.round(Common.random(1, 8));

      // round the edges of some bodies
      var chamfer = null;
      if (sides > 2 && Common.random() > 0.7) {
        chamfer = {
          radius: 10,
        };
      }

      switch (Math.round(Common.random(0, 1))) {
        case 0:
          if (Common.random() < 0.8) {
            return Bodies.rectangle(
              x,
              y,
              Common.random(25, 50),
              Common.random(25, 50),
              { chamfer: chamfer }
            );
          } else {
            return Bodies.rectangle(
              x,
              y,
              Common.random(80, 120),
              Common.random(25, 30),
              { chamfer: chamfer }
            );
          }
        case 1:
          return Bodies.polygon(x, y, sides, Common.random(25, 50), {
            chamfer: chamfer,
          });
      }
    });

    Composite.add(engine.world, stack);

    Composite.add(engine.world, [
      // Game walls
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),

      Bodies.circle(50, 100, 25),
    ]);

    setEngine(engine);

    return () => Engine.clear(engine);
  }, []);

  return { engine };
};
