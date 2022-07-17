import { world } from "./makeWorld.js";

export const isLiveCell = (positionX, positionY) => world[positionX][positionY];

export default isLiveCell;
