import { Board } from "../data/type.js";
import { getRandomPositions } from "./getRandomPositions.js";

export const generateBoardWithMines = (board: Board): Board => {
  const minesBoard = board;

  const yPositions = getRandomPositions(board);
  const xPositions = getRandomPositions(board);

  for (let count = 0; count < xPositions.length; count++) {
    minesBoard[yPositions[count]][xPositions[count]].hasMine = true;
  }

  return minesBoard;
};
