import { getAdjacentCellsPositions } from "../getAdjacentMines";
import { generateBoard } from "../generateBoard";

describe("Given the getAdjacentCellsPositions function", () => {
  describe("When it receives the cell A1 (Letters for rows and Numbers for columns)", () => {
    test("Then it should return the cells A2, B1, B2", () => {
      const boardDimension = 5;
      const testBoard = generateBoard(boardDimension);
      const testCell = testBoard[0][0];

      const expectedAdjacentCellsPositions = [
        [0, 1],
        [1, 0],
        [1, 1],
      ];
      const actualAjacentCellsPositions = getAdjacentCellsPositions(
        testCell,
        testBoard
      );

      expect(actualAjacentCellsPositions).toStrictEqual(
        expectedAdjacentCellsPositions
      );
    });
  });

  describe("When it receives the cell C3 (Letters for rows and Numbers for columns)", () => {
    test("Then it should return the cells B2, B3, B4, C2, C4, D2, D3, D4", () => {
      const boardDimension = 5;
      const testBoard = generateBoard(boardDimension);
      const testCell = testBoard[2][2];

      const expectedAdjacentCellsPositions = [
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 1],
        [2, 3],
        [3, 1],
        [3, 2],
        [3, 3],
      ];
      const actualAjacentCellsPositions = getAdjacentCellsPositions(
        testCell,
        testBoard
      );

      expect(actualAjacentCellsPositions).toStrictEqual(
        expectedAdjacentCellsPositions
      );
    });
  });
});
