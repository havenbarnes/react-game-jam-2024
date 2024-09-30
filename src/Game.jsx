import { Container, Sprite, Text } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { DIMENSIONS, half } from "./game/dimensions";

export const Game = () => {
  const bunnyUrl = "https://pixijs.io/pixi-react/img/bunny.png";
  return (
    <Container>
      <Sprite image={bunnyUrl} x={40} y={150} />
      <Text
        text="Luke Warm Seltzer"
        x={half(DIMENSIONS.STAGE.WIDTH)}
        y={DIMENSIONS.TITLE.TOP}
        anchor={[0.5, 0]}
        style={
          new TextStyle({
            align: "center",
            fontFamily: '"Press Start 2P", monospace',
            fontSize: DIMENSIONS.FONT_SIZE,
          })
        }
      />
    </Container>
  );
};
