import { generateBoard } from "./board/generateBoard.js";
import { setMines } from "./board/setMines.js";
import { generateRandomPositions } from "./board/generateRandomPositions.js";

export const board = generateBoard(8);
generateRandomPositions();
setMines();
