import answerLiveCell from "./isLiveCell.js";

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

const cellX = 1;
const cellY = 1;

// const answerLiveCell = (positionX, positionY) => world[positionX][positionY];

const neivorsAreLive = (positionX, positionY) => {
  let countNeivorsAreLive = 0;

  if (answerLiveCell(positionX - 1, positionY - 1)) {
    countNeivorsAreLive += 1;
  }
  if (answerLiveCell(positionX, positionY - 1)) {
    countNeivorsAreLive += 1;
  }
  if (answerLiveCell(positionX + 1, positionY - 1)) {
    countNeivorsAreLive += 1;
  }

  if (answerLiveCell(positionX - 1, positionY)) {
    countNeivorsAreLive += 1;
  }
  // if (answerLiveCell(positionX, positionY)) {
  //  countNeivorsAreLive += 1;
  // }
  if (answerLiveCell(positionX + 1, positionY)) {
    countNeivorsAreLive += 1;
  }

  if (answerLiveCell(positionX - 1, positionY + 1)) {
    countNeivorsAreLive += 1;
  }
  if (answerLiveCell(positionX, positionY + 1)) {
    countNeivorsAreLive += 1;
  }
  if (answerLiveCell(positionX + 1, positionY + 1)) {
    countNeivorsAreLive += 1;
  }
  return countNeivorsAreLive;
};

const isNewState = (positionX, positionY) => {
  if (
    (answerLiveCell(positionX, positionY) &&
      neivorsAreLive(positionX, positionY) === 2) ||
    neivorsAreLive(positionX, positionY) === 3
  ) {
    return true;
  }
  if (
    !answerLiveCell(positionX, positionY) &&
    neivorsAreLive(positionX, positionY) === 3
  ) {
    return true;
  }
  return false;
};

console.log(answerLiveCell(cellX, cellY));

console.log(neivorsAreLive(cellX, cellY));

console.log(isNewState(cellX, cellY));

export default world;
