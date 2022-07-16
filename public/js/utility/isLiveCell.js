import { world } from "../index.js";

export const isLiveCell = (positionX, positionY) => world[positionX][positionY];

export default isLiveCell;
