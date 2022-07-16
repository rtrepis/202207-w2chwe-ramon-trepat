import isLiveCellTest from "./isLiveCell.js";
import world from "../index.js";

describe("Given a cellX and CellY", () => {
  describe("When it'is isLiveCell is called it receives 1 and 1", () => {
    test("world return is true", () => {
      const cellX = 1;
      const cellY = 1;

      const isLiveReturn = isLiveCellTest(cellX, cellY);

      expect(isLiveReturn).toStrictEqual(world[cellX][cellY]);
    });
  });
});
