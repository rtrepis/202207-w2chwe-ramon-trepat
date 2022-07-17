import { isLiveCell } from "./isLiveCell.js";
import { worldWidth, worldHeight } from "../index.js";

export const neighboursAreLive = (positionX, positionY) => {
  let countneighboursAreLive = 0;

  if (
    positionX - 1 > 0 &&
    positionY - 1 < 0 &&
    isLiveCell(positionX - 1, positionY - 1)
  ) {
    countneighboursAreLive += 1;
  }
  if (positionY - 1 > 0 && isLiveCell(positionX, positionY - 1)) {
    countneighboursAreLive += 1;
  }
  if (
    positionX + 1 < worldWidth &&
    positionY - 1 > 0 &&
    isLiveCell(positionX + 1, positionY - 1)
  ) {
    countneighboursAreLive += 1;
  }

  if (positionX - 1 > 0 && isLiveCell(positionX - 1, positionY)) {
    countneighboursAreLive += 1;
  }
  if (positionX + 1 < worldWidth && isLiveCell(positionX + 1, positionY)) {
    countneighboursAreLive += 1;
  }

  if (
    positionX - 1 > 0 &&
    positionY + 1 < worldHeight &&
    isLiveCell(positionX - 1, positionY + 1)
  ) {
    countneighboursAreLive += 1;
  }
  if (positionY + 1 < worldHeight && isLiveCell(positionX, positionY + 1)) {
    countneighboursAreLive += 1;
  }
  if (
    positionX + 1 < worldWidth &&
    positionY + 1 < worldHeight &&
    isLiveCell(positionX + 1, positionY + 1)
  ) {
    countneighboursAreLive += 1;
  }

  return countneighboursAreLive;
};

export default neighboursAreLive;
