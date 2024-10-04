import { useEffect, useRef, useState } from "react";
import { DIMENSIONS } from "./game/constants";
import {
  Bodies,
  Body,
  Composite,
  Engine,
  Events,
  Render,
  Runner,
  World,
} from "matter-js";

export const PlayScreen = ({ level, onSuccess, onFail }) => {
  const scene = useRef();
  const engine = useRef(Engine.create());

  const [keysPressed, setKeysPressed] = useState([]);

  document.addEventListener("keydown", (e) => {
    if (!keysPressed.includes(e.code)) {
      setKeysPressed([...keysPressed, e.code]);
    }
  });

  document.addEventListener("keyup", (e) => {
    setKeysPressed((curr) => curr.filter((el) => el !== e.code));
  });

  useEffect(() => {
    // mount
    const cw = DIMENSIONS.STAGE.WIDTH;
    const ch = DIMENSIONS.STAGE.HEIGHT;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
      },
    });

    const runner = Runner.create({
      enabled: true,
    });

    // boundaries
    Composite.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    // Game ball
    Composite.add(engine.current.world, [
      Bodies.circle(cw / 2, 0, DIMENSIONS.BALL.RADIUS, {
        mass: 10,
        restitution: 0.9,
        friction: 0.005,
        render: {
          fillStyle: "#ff0000",
        },
      }),
    ]);

    // Game bar
    const bar = Bodies.rectangle(cw / 2, 500, cw * 3, DIMENSIONS.BAR.HEIGHT, {
      render: {
        fillStyle: "#ff0000",
      },
      isStatic: true,
      angle: 0.5,
    });
    Composite.add(engine.current.world, [bar]);

    Events.on(engine.current, "beforeUpdate", () => {
      Body.setPosition(bar, {
        x: bar.position.x + 1,
        y: bar.position.y,
      });
    });

    Runner.run(runner, engine.current);
    Render.run(render);

    // unmount
    return () => {
      // destroy Matter
      Render.stop(render);
      World.clear(engine.current.world);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <div
      ref={scene}
      style={{
        width: DIMENSIONS.STAGE.WIDTH,
        height: DIMENSIONS.STAGE.HEIGHT,
      }}
    />
  );
};
