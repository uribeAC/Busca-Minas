import { Board } from "../data/type.js";
import { Cell } from "../data/type.js";
import { getAdjacentMinesTotal } from "./getAdjacentMines.js";

export const generateBoard = (boardDimension: number): Board => {
  if (boardDimension < 5) {
    throw new Error("The minimum dimension to generate a board is 5");
  }

  const board: Board = [];

  for (let positionY = 0; positionY < boardDimension; positionY++) {
    board[positionY] = [];
    for (let positionX = 0; positionX < boardDimension; positionX++) {
      const cell: Cell = {
        hasMine: false,
        adjacentMinesTotal: 0,
        isOpen: false,
        positionY: positionY,
        positionX: positionX,
      };

      board[positionY][positionX] = cell;
    }
  }

  return board;
};
