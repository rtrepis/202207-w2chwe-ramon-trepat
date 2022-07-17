import { world } from "../index.js";
import { isLiveCell } from "./isLiveCell.js";

describe("given a world of cells with X and Y coordinates", () => {
  describe("how much do we ask a specific cell with the coordinates (x=1, y=1)", () => {
    test("the world returns if the cell is alive or dead", () => {
      // world;
      const cellX = 1;
      const cellY = 1;

      const isLiveReturn = isLiveCell(cellX, cellY);

      expect(isLiveReturn).toStrictEqual(world[cellX][cellY]);
    });
  });
});
