import { board } from "../index.js";
import { getRandomPositions } from "./getRandomPositions.js";
import { getAdjacentMinesTotal } from "./getAdjacentMines.js";

export const setMines = (): void => {
  const yPositions = getRandomPositions(board);
  const xPositions = getRandomPositions(board);

  for (let count = 0; count < xPositions.length; count++) {
    board[yPositions[count]][xPositions[count]].hasMine = true;
  }

  board.forEach((row) => {
    row.forEach((cell) => {
      cell.adjacentMinesTotal = getAdjacentMinesTotal(cell, board);
    });
  });
};
