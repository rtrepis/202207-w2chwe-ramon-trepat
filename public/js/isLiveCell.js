import { world } from "./index";

const isLiveCell = (positionX, positionY) => world[positionX][positionY];

export default isLiveCell;
