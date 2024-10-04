import { useState } from "react";
import { Stack, Text } from "@mantine/core";
import { useSeconds } from "./use-seconds";
import { PlayScreen } from "./PlayScreen";
import { getDefaultTextStyle } from "./textStyles";

export const Game = ({ setStep }) => {
  const [level, setLevel] = useState(1);
  const { formattedTime } = useSeconds();
  const [enabled, setEnabled] = useState(true);

  const reset = () => {
    setEnabled(false);
    setTimeout(() => {
      setEnabled(true);
    }, 100);
  };

  if (!enabled) {
    return null;
  }

  return (
    <Stack>
      {enabled && <PlayScreen />}
      <Stack gap="md">
        <Text style={getDefaultTextStyle()}>Luke Warm Seltzer</Text>
        <Text style={getDefaultTextStyle()}>{`Level ${level}`}</Text>
        <Text style={getDefaultTextStyle()}>{formattedTime}</Text>
        <Text onClick={reset} style={getDefaultTextStyle()}>
          Reset
        </Text>
        <Text onClick={() => setStep("start")} style={getDefaultTextStyle()}>
          Back
        </Text>
      </Stack>
    </Stack>
  );
};
