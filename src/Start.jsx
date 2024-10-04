import { getMenuTextStyle, getTitleTextStyle } from "./textStyles";
import { Stack, Text } from "@mantine/core";

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

export const Start = (props) => {
  return (
    <Stack align="center">
      <Text style={getTitleTextStyle()}>Luke Warm Seltzer</Text>
      {options.map((option, i) => (
        <Text
          key={i}
          onClick={() => props.setStep(option.step)}
          style={getMenuTextStyle()}
        >
          {option.title}
        </Text>
      ))}
    </Stack>
  );
};
