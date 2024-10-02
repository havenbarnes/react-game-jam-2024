import { useLeaderboard } from "./use-leaderboard";
import { Container, Text } from "@pixi/react";
import { DIMENSIONS, half } from "./game/constants";
import { getDefaultTextStyle } from "./textStyles";
import { formatSeconds } from "./use-seconds";

export const Leaderboard = () => {
  const { leaderboard } = useLeaderboard();

  return (
    <Container align="center">
      <Text
        text="Luke Warm Seltzer"
        x={half(DIMENSIONS.STAGE.WIDTH)}
        y={DIMENSIONS.TITLE.GAME}
        anchor={[0.5, 0]}
        style={getDefaultTextStyle()}
      />
      {leaderboard.length === 0 && (
        <Text
          text="No results yet!"
          anchor={[0.5, 0.5]}
          x={DIMENSIONS.STAGE.WIDTH / 2}
          y={DIMENSIONS.TITLE.START + 150}
          style={getDefaultTextStyle()}
        />
      )}
      {leaderboard.length > 0 &&
        leaderboard.map((option, i) => (
          <Text
            key={i}
            text={`${i + 1}: Level ${option.level}, ${formatSeconds(
              option.time
            )}`}
            anchor={[0.5, 0.5]}
            x={DIMENSIONS.STAGE.WIDTH / 2}
            y={DIMENSIONS.TITLE.START + 35 * (i + 1)}
            style={getDefaultTextStyle()}
          />
        ))}
    </Container>
  );
};
