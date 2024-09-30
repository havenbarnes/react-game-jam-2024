import "./App.css";

import "@pixi/events";
import { Stage } from "@pixi/react";
import { DIMENSIONS } from "./game/dimensions";
import { Game } from "./Game";
import { Start } from "./Start";
import { useState } from "react";

const App = () => {
  const [step, setStep] = useState("start");

  return (
    <Stage
      width={DIMENSIONS.STAGE.WIDTH}
      height={DIMENSIONS.STAGE.HEIGHT}
      options={{ background: 0xf6f6f6 }}
    >
      {step === "start" && <Start setStep={setStep} />}
      {step === "game" && <Game />}
    </Stage>
  );
};

export default App;
