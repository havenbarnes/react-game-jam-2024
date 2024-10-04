// Used to make game bigger, proprotionally
const RESOLUTION_MULTIPLIER = 1.4;

export const DIMENSIONS = {
  FONT_SIZE: 12 * RESOLUTION_MULTIPLIER,
  STAGE: {
    WIDTH: 300 * RESOLUTION_MULTIPLIER,
    HEIGHT: 500 * RESOLUTION_MULTIPLIER,
  },
  TITLE: {
    GAME: 10 * RESOLUTION_MULTIPLIER,
    START: 100 * RESOLUTION_MULTIPLIER,
  },
  SCOREBOARD: {
    LEFT: 20 * RESOLUTION_MULTIPLIER,
    BOTTOM: 20 * RESOLUTION_MULTIPLIER,
    WIDTH: 80 * RESOLUTION_MULTIPLIER,
    HEIGHT: 50 * RESOLUTION_MULTIPLIER,
  },
  BALL: {
    RADIUS: 10 * RESOLUTION_MULTIPLIER,
  },
  BAR: {
    HEIGHT: 8 * RESOLUTION_MULTIPLIER,
  },
  GOAL_BUBBLE: {
    RADIUS: 11 * RESOLUTION_MULTIPLIER,
  },
  SMALL_DANGER_BUBBLE: {
    RADIUS: 14 * RESOLUTION_MULTIPLIER,
  },
  LARGE_DANGER_BUBBLE: {
    RADIUS: 17 * RESOLUTION_MULTIPLIER,
  },
};

/** Helper functions */

// Used to center objects, `dimension * 1.0` is used to convert to float
export const half = (dimension) => (dimension * 1.0) / 2;

export const fromBottom = (dimension) => DIMENSIONS.STAGE.HEIGHT - dimension;
