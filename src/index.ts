import { generateBoard } from "./board/factory/generateBoard.js";
import { generateBoardWithMines } from "./board/generateBoardWithMines.js";
import { generateCompleteBoard } from "./board/generateCompleteBoard.js";
import { getRandomPositions } from "./board/getRandomPositions.js";
import { createBoardElement, renderBoard } from "./board/ui/renderBoard.js";
import { renderMinesTotal } from "./board/ui/renderMinesTotal.js";
import { renderVictory } from "./board/ui/renderVictory.js";

export const board = generateBoard(8);

getRandomPositions(board);
export const minesBoard = generateBoardWithMines(board);

export const completeBoard = generateCompleteBoard(minesBoard);

export const containerElement = document.querySelector(
  ".game__window"
) as HTMLElement;

if (!containerElement) {
  throw new Error("Missinng HTML Element");
}

const boardElement = createBoardElement(completeBoard);
renderBoard(boardElement, containerElement);

renderMinesTotal(completeBoard);
renderVictory();
