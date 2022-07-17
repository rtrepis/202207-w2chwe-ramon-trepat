import { printWorld } from "./printWorld.js";
import { world } from "./makeWorld.js";
import { newState } from "./newState.js";

export const nextDay = () => {
  world.forEach((rows, cellX) => {
    rows.forEach((colum, cellY) => {
      world[cellX][cellY] = newState(cellX, cellY);
      printWorld(world);
    });
  });
};

export default nextDay;
