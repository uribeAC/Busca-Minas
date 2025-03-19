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
    test(`Then it should return
      [[newCell, newCell, newCell, newCell, newCell],
      [newCell, newCell, newCell, newCell, newCell],
      [newCell, newCell, newCell, newCell, newCell],
      [newCell, newCell, newCell, newCell, newCell],
      [newCell, newCell, newCell, newCell, newCell]]
      `, () => {
      const boardDimension = 5;

      const expectedBoard = [
        [newCell, newCell, newCell, newCell, newCell],
        [newCell, newCell, newCell, newCell, newCell],
        [newCell, newCell, newCell, newCell, newCell],
        [newCell, newCell, newCell, newCell, newCell],
        [newCell, newCell, newCell, newCell, newCell],
      ];
      const actualBoard = generateBoard(boardDimension);

      expect(expectedBoard).toStrictEqual(actualBoard);
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
