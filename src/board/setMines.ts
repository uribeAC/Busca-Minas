import { board } from "../index.js";
import { generateRandomPositions } from "./generateRandomPositions.js";
import { getAdjacentMinesTotal } from "./getAdjacentMines.js";

export const setMines = (): void => {
  const yPositions = generateRandomPositions();
  const xPositions = generateRandomPositions();

  for (let count = 0; count < xPositions.length; count++) {
    board[yPositions[count]][xPositions[count]].hasMine = true;
  }

  board.forEach((row) => {
    row.forEach((cell) => {
      cell.adjacentMinesTotal = getAdjacentMinesTotal(cell, board);
    });
  });
};
