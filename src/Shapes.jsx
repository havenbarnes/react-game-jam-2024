import { useCallback } from "react";
import { Graphics } from "@pixi/react";

export const Rectangle = ({ body }) => {
  const rectangle = {
    x: body.position.x,
    y: body.position.y,
    width: Math.abs(body.vertices[0].x - body.vertices[1].x),
    height: Math.abs(body.vertices[1].y - body.vertices[2].y),
  };

  const draw = useCallback(
    (g) => {
      g.clear();
      g.beginFill(body.color);
      g.drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
      g.endFill();
    },
    [body.position.x, body.position.y]
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
    [body.position.x, body.position.y]
  );

  return <Graphics draw={draw} />;
};
