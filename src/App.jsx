import "./App.css";

import { Game } from "./Game";
import { Start } from "./Start";
import { Leaderboard } from "./Leaderboard";
import { useState } from "react";
import { Box } from "@mantine/core";

const App = () => {
  const [step, setStep] = useState("start");

  return (
    <Box w="300px" h="200px">
      {step === "start" && <Start setStep={setStep} />}
      {step === "game" && <Game setStep={setStep} />}
      {step === "leaderboard" && <Leaderboard setStep={setStep} />}
    </Box>
  );
};

export default App;
