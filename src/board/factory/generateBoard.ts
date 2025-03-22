import { Board } from "../data/type.js";
import { Cell } from "../../cell/data/type.js";
import { generateCell } from "../../cell/factory/generateCell.js";

export const generateBoard = (boardDimension: number): Board => {
  if (boardDimension < 5) {
    throw new Error("The minimum dimension to generate a board is 5");
  }

  if (!Number.isInteger(boardDimension)) {
    throw new Error("Only integrer numbers are valid for board dimension");
  }

  const board: Board = [];

  for (let positionY = 0; positionY < boardDimension; positionY++) {
    board[positionY] = [];

    for (let positionX = 0; positionX < boardDimension; positionX++) {
      const cell = generateCell();

      cell.positionX = positionX;
      cell.positionY = positionY;

      board[positionY][positionX] = cell;
    }
  }

  return board;
};
