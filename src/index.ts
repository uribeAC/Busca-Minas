import { generateBoard } from "./board/generateBoard.js";
import { setMines } from "./board/setMines.js";
import { generateRandomPositions } from "./board/generateRandomPositions.js";
import { renderBoard } from "./ui/renderBoard.js";

export const board = generateBoard(8);
generateRandomPositions();
setMines();
renderBoard(board);
