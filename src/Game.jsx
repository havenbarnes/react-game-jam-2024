import { Container, Text } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { DIMENSIONS, half } from "./game/dimensions";
import { PlayScreen } from "./PlayScreen";
import { useSeconds } from "./use-seconds";
import { useState } from "react";

export const Game = () => {
  const [level, setLevel] = useState(1);
  const { formattedTime } = useSeconds();

  const textStyle = new TextStyle({
    align: "center",
    fontFamily: '"Press Start 2P", monospace',
    fontSize: DIMENSIONS.FONT_SIZE,
  });

  return (
    <Container>
      <Text
        text="Luke Warm Seltzer"
        x={half(DIMENSIONS.STAGE.WIDTH)}
        y={DIMENSIONS.TITLE.GAME}
        anchor={[0.5, 0]}
        style={textStyle}
      />
      <PlayScreen
        level={level}
        onSuccess={() => setLevel(level + 1)}
        onFail={null}
      />
      <Text
        text={`Level ${level}`}
        x={DIMENSIONS.STAGE.WIDTH * 0.25}
        y={DIMENSIONS.STAGE.HEIGHT - DIMENSIONS.FONT_SIZE * 2}
        anchor={[0.5, 0]}
        style={textStyle}
      />
      <Text
        text={formattedTime}
        x={DIMENSIONS.STAGE.WIDTH * 0.75}
        y={DIMENSIONS.STAGE.HEIGHT - DIMENSIONS.FONT_SIZE * 2}
        anchor={[0.5, 0]}
        style={textStyle}
      />
    </Container>
  );
};
