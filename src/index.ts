import { generateBoard } from "./board/generateBoard.js";
import { setMines } from "./board/setMines.js";
import { getRandomPositions } from "./board/getRandomPositions.js";
import { renderBoard } from "./ui/renderBoard.js";

export const board = generateBoard(8);
getRandomPositions(board);
setMines();
renderBoard(board);
