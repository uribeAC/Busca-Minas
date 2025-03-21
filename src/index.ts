import { generateBoard } from "./board/factory/generateBoard.js";
import { generateBoardWithMines } from "./board/generateBoardWithMines.js";
import { generateCompleteBoard } from "./board/generateCompleteBoard.js";
import {
  getAdjacentCellsPositions,
  getAdjacentMinesTotal,
} from "./board/getAdjacentMines.js";
import { getRandomPositions } from "./board/getRandomPositions.js";
import { renderBoard } from "./board/ui/renderBoard.js";

export const board = generateBoard(8);

getRandomPositions(board);
export const minesBoard = generateBoardWithMines(board);

export const completeBoard = generateCompleteBoard(minesBoard);

renderBoard(completeBoard);
