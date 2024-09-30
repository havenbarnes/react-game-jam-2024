import { Container, Sprite, Text } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { DIMENSIONS, half } from "./game/dimensions";
import { useSeconds } from "./use-seconds";

export const Game = () => {
  const bunnyUrl = "https://pixijs.io/pixi-react/img/bunny.png";

  const { formattedTime } = useSeconds();

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
      <Text
        text={formattedTime}
        x={half(DIMENSIONS.STAGE.WIDTH)}
        y={DIMENSIONS.TITLE.TOP + 20}
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
