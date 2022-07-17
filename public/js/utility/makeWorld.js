export const world = [];

export const makeWorld = (height, width) => {
  for (let i = 0; i < height; i += 1) {
    world[i] = [];
    for (let j = 0; j < width; j += 1) {
      world[i][j] = Math.random() < 0.5;
    }
  }
};
