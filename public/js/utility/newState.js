import { neighboursAreLive } from "./neighboursAreLive.js";
import { isLiveCell } from "./isLiveCell.js";

export const newState = (positionX, positionY) => {
  if (
    (isLiveCell(positionX, positionY) &&
      neighboursAreLive(positionX, positionY) === 2) ||
    neighboursAreLive(positionX, positionY) === 3
  ) {
    return true;
  }
  if (
    !isLiveCell(positionX, positionY) &&
    neighboursAreLive(positionX, positionY) === 3
  ) {
    return true;
  }
  return false;
};

export default newState;
