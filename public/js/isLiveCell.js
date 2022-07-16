import world from "./index";
import exportX from "./index";
import exportY from "./.index";

const isLiveCell = (world, positionX, postitionY) =>
  world[postitionX][positionY];

export default isLiveCell;
