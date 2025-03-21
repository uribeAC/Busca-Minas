import { Board } from "./data/type.js";
import { getAdjacentMinesTotal } from "./getAdjacentMines.js";

export const generateCompleteBoard = (board: Board): Board => {
  const completeBoard = board;

  board.forEach((row) => {
    row.forEach((cell) => {
      cell.adjacentMinesTotal = getAdjacentMinesTotal(cell, board);
    });
  });

  return completeBoard;
};
