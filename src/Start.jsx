import "@pixi/events";
import { Container, Text } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { DIMENSIONS } from "./game/dimensions";

export const Start = ({ setStep }) => {
  return (
    <Container align="center" eventMode="dynamic">
      <Text
        text="Luke Warm Seltzer"
        anchor={[0.5, 0.5]}
        x={DIMENSIONS.STAGE.WIDTH / 2}
        y={DIMENSIONS.TITLE.START}
        style={
          new TextStyle({
            align: "center",
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: 20,
            fontWeight: "400",
            fill: ["#ffffff", "#00ff99"],
            stroke: "#01d27e",
            strokeThickness: 5,
            letterSpacing: 20,
            dropShadow: true,
            dropShadowColor: "#ccced2",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
          })
        }
      />
      <Text
        text="Start"
        anchor={[0.5, 0.5]}
        x={DIMENSIONS.STAGE.WIDTH / 2}
        y={DIMENSIONS.TITLE.TOP + 100}
        eventMode="dynamic"
        click={() => setStep("game")}
        style={
          new TextStyle({
            align: "center",
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: 20,
            fontWeight: "400",
            fill: ["#ffffff", "#00ff99"],
            stroke: "#01d27e",
            strokeThickness: 5,
            letterSpacing: 20,
            dropShadow: true,
            dropShadowColor: "#ccced2",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
          })
        }
      />
    </Container>
  );
};
