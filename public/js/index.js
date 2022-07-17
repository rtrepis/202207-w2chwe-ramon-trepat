// import { isLiveCell } from "./utility/isLiveCell.js";
// import { neighboursAreLive } from "./utility/neighboursAreLive.js";
// import { newState } from "./utility/newState.js";
import { printWorld } from "./utility/printWorld.js";
import { makeWorld, world } from "./utility/makeWorld.js";
import { nextDay } from "./utility/newDay.js";

export const worldWidth = 3;
export const worldHeight = 3;

makeWorld(worldHeight, worldWidth);

printWorld(world);

setInterval(() => {
  nextDay();
  console.log(world);
}, 1000);
