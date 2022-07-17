// import { isLiveCell } from "./utility/isLiveCell.js";
// import { neighboursAreLive } from "./utility/neighboursAreLive.js";
// import { newState } from "./utility/newState.js";
import { printWorld } from "./utility/printWorld.js";

export const world = [];

world[0] = [];
world[1] = [];
world[2] = [];

world[0][0] = true;
world[0][1] = false;
world[0][2] = true;

world[1][0] = false;
world[1][1] = false;
world[1][2] = false;

world[2][0] = true;
world[2][1] = false;
world[2][2] = false;

printWorld(world);

export default world;
