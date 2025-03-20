import { generateBoard } from "../generateBoard";
import { Cell } from "../../data/type";

const newCell: Cell = {
  hasMine: false,
  adjacentMinesTotal: 0,
  isOpen: false,
  positionX: 0,
  positionY: 0,
};

describe("Given the generateBoard function", () => {
  describe("When it receives 5", () => {
    test("Then it should return a board with 5 rows", () => {
      const boardDimension = 5;
      const testBoard = generateBoard(boardDimension);

      const expectedRows = 5;
      const actualRows = testBoard.length;

      expect(actualRows).toBe(expectedRows);
    });

    test("Then it should return a board with 5 columns", () => {
      const boardDimension = 5;
      const testBoard = generateBoard(boardDimension);

      const expectedColumns = 5;
      const actualColumns = testBoard[0].length;

      expect(actualColumns).toBe(expectedColumns);
    });

    test("Then it should return a board with no mines", () => {
      const boardDimension = 5;
      const testBoard = generateBoard(boardDimension);

      const expectedBoolean = true;
      const actualBoolean = testBoard.every((row) =>
        row.every((cell) => !cell.hasMine)
      );

      expect(actualBoolean).toBe(expectedBoolean);
    });

    test("Then it should return a board with no adjacent mines", () => {
      const boardDimension = 5;
      const testBoard = generateBoard(boardDimension);

      const expectedBoolean = true;
      const actualBoolean = testBoard.every((row) =>
        row.every((cell) => cell.adjacentMinesTotal === 0)
      );

      expect(actualBoolean).toBe(expectedBoolean);
    });
  });

  describe("When it receives 0", () => {
    test(`Then it should return error message "The minimum dimension to generate a board is 5"`, () => {
      const boardDimension = 0;

      const expectedErrorMessage =
        "The minimum dimension to generate a board is 5";

      expect(() => generateBoard(boardDimension)).toThrow(expectedErrorMessage);
    });
  });
});
