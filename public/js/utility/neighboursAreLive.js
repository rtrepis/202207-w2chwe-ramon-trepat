import { isLiveCell } from "./isLiveCell.js";

export const neighboursAreLive = (positionX, positionY) => {
  let countneighboursAreLive = 0;

  if (isLiveCell(positionX - 1, positionY - 1)) {
    countneighboursAreLive += 1;
  }
  if (isLiveCell(positionX, positionY - 1)) {
    countneighboursAreLive += 1;
  }
  if (isLiveCell(positionX + 1, positionY - 1)) {
    countneighboursAreLive += 1;
  }

  if (isLiveCell(positionX - 1, positionY)) {
    countneighboursAreLive += 1;
  }
  // if (isLiveCell(positionX, positionY)) {
  //  countneighboursAreLive += 1;
  // }
  if (isLiveCell(positionX + 1, positionY)) {
    countneighboursAreLive += 1;
  }

  if (isLiveCell(positionX - 1, positionY + 1)) {
    countneighboursAreLive += 1;
  }
  if (isLiveCell(positionX, positionY + 1)) {
    countneighboursAreLive += 1;
  }
  if (isLiveCell(positionX + 1, positionY + 1)) {
    countneighboursAreLive += 1;
  }
  return countneighboursAreLive;
};

export default neighboursAreLive;
