import "@pixi/events";
import { Container, Text } from "@pixi/react";
import { DIMENSIONS } from "./game/dimensions";
import { getMenuTextStyle, getTitleTextStyle } from "./textStyles";

const options = [
  {
    title: "Start",
    step: "game",
  },
  {
    title: "Leaderboard",
    step: "leaderboard",
  },
];

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
      {options.map((option, i) => (
        <Text
          key={i}
          text={option.title}
          anchor={[0.5, 0.5]}
          x={DIMENSIONS.STAGE.WIDTH / 2}
          y={DIMENSIONS.TITLE.START + 100 + 50 * (i + 1)}
          eventMode="dynamic"
          click={() => setStep(option.step)}
          style={getMenuTextStyle()}
        />
      ))}
    </Container>
  );
};
