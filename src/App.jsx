import "./App.css";

import { TextStyle } from "pixi.js";
import { Stage, Container, Sprite, Text } from "@pixi/react";
import { DIMENSIONS, fromBottom, half } from "./game/dimensions";

const App = () => {
  const bunnyUrl = "https://pixijs.io/pixi-react/img/bunny.png";
  return (
    <Stage
      width={DIMENSIONS.STAGE.WIDTH}
      height={DIMENSIONS.STAGE.HEIGHT}
      options={{ background: 0xf6f6f6 }}
    >
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
    </Stage>
  );
};

export default App;
