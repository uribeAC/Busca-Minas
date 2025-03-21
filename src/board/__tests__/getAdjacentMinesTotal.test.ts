import { getAdjacentMinesTotal } from "../getAdjacentMines";
import { generateBoard } from "../factory/generateBoard";

describe("Given the getAdjacentMinesTotal function", () => {
  describe("When it receives the cell A1 and there is a mine in A2 but none in B1 and B2", () => {
    test("Then it should return the 1", () => {
      const boardDimension = 5;
      const testBoard = generateBoard(boardDimension);

      const testCell = testBoard[0][0];
      testBoard[0][1].hasMine = true;
      const testMinePosition = [[0, 1]];

      const expectedAdjacentMinesTotal = 1;
      const actualAjacentMinesTotal = getAdjacentMinesTotal(
        testCell,
        testBoard,
        testMinePosition
      );

      expect(actualAjacentMinesTotal).toBe(expectedAdjacentMinesTotal);
    });
  });

  describe("When it receives the cell A1 and there is no mines in A2, B1 and B2", () => {
    test("Then it should return the 0", () => {
      const boardDimension = 5;
      const testBoard = generateBoard(boardDimension);

      const testCell = testBoard[0][0];
      const testMinePoisitions = [[0, 0]];

      const expectedAdjacentMinesTotal = 0;
      const actualAjacentMinesTotal = getAdjacentMinesTotal(
        testCell,
        testBoard,
        testMinePoisitions
      );

      expect(actualAjacentMinesTotal).toBe(expectedAdjacentMinesTotal);
    });
  });
});
