import { getRandomPositions } from "../getRandomPositions";
import { generateBoard } from "../generateBoard";

describe("Given the getRandomPositions function", () => {
  describe("When it receives a 8x8 board", () => {
    test("Then it should return 9 positions", () => {
      const boardDimension = 8;
      const testBoard = generateBoard(boardDimension);

      const expectedPositionsTotal = 10;
      const actualPositionsTotal = getRandomPositions(testBoard).length;

      expect(actualPositionsTotal).toBe(expectedPositionsTotal);
    });
  });

  describe("When it receives a 5x5 board", () => {
    test("Then it should return 9 positions", () => {
      const boardDimension = 5;
      const testBoard = generateBoard(boardDimension);

      const expectedPositionsTotal = 4;
      const actualPositionsTotal = getRandomPositions(testBoard).length;

      expect(actualPositionsTotal).toBe(expectedPositionsTotal);
    });
  });
});
