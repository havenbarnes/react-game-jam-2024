import { DIMENSIONS } from "./game/dimensions";
import { TextStyle } from "pixi.js";

export const getTitleTextStyle = () => new TextStyle({
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

export const getMenuTextStyle = () => new TextStyle({
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  fontSize: 20,
  fontWeight: "600",
  fill: ["#ffffff", "#00ff99"],
  stroke: "#EB6424",
  strokeThickness: 5,
  letterSpacing: 10,
})

export const getDefaultTextStyle = () => new TextStyle({
  align: "center",
  fontFamily: '"Press Start 2P", monospace',
  fontSize: DIMENSIONS.FONT_SIZE,
});