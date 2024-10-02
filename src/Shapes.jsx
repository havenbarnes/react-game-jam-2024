import { useCallback } from "react";
import { Graphics } from "@pixi/react";

export const Rectangle = ({ body }) => {
  const rectangle = {
    x: body.position.x,
    y: body.position.y,
    width: (Math.abs(body.bounds.max.x) + Math.abs(body.bounds.min.x)) / 2,
    height: (Math.abs(body.bounds.max.y) + Math.abs(body.bounds.min.y)) / 2,
  };

  const draw = useCallback(
    (g) => {
      g.clear();
      g.beginFill(body.color);
      g.drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
      g.endFill();
    },
    [body]
  );

  return <Graphics draw={draw} />;
};

export const Circle = ({ body }) => {
  const circle = {
    x: body.position.x,
    y: body.position.y,
    radius: body.circleRadius,
  };

  const draw = useCallback(
    (g) => {
      g.clear();
      g.beginFill(body.color);
      g.drawCircle(circle.x, circle.y, circle.radius);
      g.endFill();
    },
    [body]
  );

  return <Graphics draw={draw} />;
};
