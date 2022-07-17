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

// const cellX = 1;
// const cellY = 1;

// const isLiveCell = (positionX, positionY) => world[positionX][positionY];

/* 

const neighboursAreLive = (positionX, positionY) => {
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
*/

/*
const isNewState = (positionX, positionY) => {
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
*/

// console.log(isLiveCell(cellX, cellY));

// console.log(neighboursAreLive(cellX, cellY));

// console.log(newState(cellX, cellY));

export default world;
