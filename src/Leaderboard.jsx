import { useLeaderboard } from "./use-leaderboard";
import { getDefaultTextStyle } from "./textStyles";
import { formatSeconds } from "./use-seconds";
import { Stack, Text } from "@mantine/core";

export const Leaderboard = ({ setStep }) => {
  const { leaderboard } = useLeaderboard();

  return (
    <Stack align="center">
      <Text style={getDefaultTextStyle()}>Luke Warm Seltzer</Text>
      {leaderboard.length === 0 && (
        <Text style={getDefaultTextStyle()}>No results yet!</Text>
      )}
      {leaderboard.length > 0 &&
        leaderboard.map((option, i) => (
          <Text key={i} style={getDefaultTextStyle()}>
            `${i + 1}: Level ${option.level}, ${formatSeconds(option.time)}`
          </Text>
        ))}
      <Text onClick={() => setStep("start")} style={getDefaultTextStyle()}>
        Back
      </Text>
    </Stack>
  );
};
