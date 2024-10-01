import "@pixi/events";
import { Container, Text } from "@pixi/react";
import { DIMENSIONS } from "./game/dimensions";
import { getTitleTextStyle } from "./textStyles";

export const Start = ({ setStep }) => {
  return (
    <Container align="center" eventMode="dynamic">
      <Text
        text="Luke Warm Seltzer"
        anchor={[0.5, 0.5]}
        x={DIMENSIONS.STAGE.WIDTH / 2}
        y={DIMENSIONS.TITLE.START}
        style={getTitleTextStyle()}
      />
      <Text
        text="Start"
        anchor={[0.5, 0.5]}
        x={DIMENSIONS.STAGE.WIDTH / 2}
        y={DIMENSIONS.TITLE.START + 100}
        eventMode="dynamic"
        click={() => setStep("game")}
        style={getTitleTextStyle()}
      />
    </Container>
  );
};
