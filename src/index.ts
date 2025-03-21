import { generateBoard } from "./board/factory/generateBoard.js";
import { generateBoardWithMines } from "./board/generateBoardWithMines.js";
import { generateCompleteBoard } from "./board/generateCompleteBoard.js";
import { getRandomPositions } from "./board/getRandomPositions.js";
import { createBoardElement, renderBoard } from "./board/ui/renderBoard.js";

export const board = generateBoard(8);

getRandomPositions(board);
export const minesBoard = generateBoardWithMines(board);

export const completeBoard = generateCompleteBoard(minesBoard);

const container = document.querySelector(".game__window");

if (!container) {
  throw new Error("Missinng HTML Element");
}

export const containerElement = container as HTMLElement;

const boardElement = createBoardElement(completeBoard);
renderBoard(boardElement, containerElement);
