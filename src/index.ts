import { generateBoard } from "./board/generateBoard.js";
import { setMines } from "./board/setMines.js";
import { generateCoordinates } from "./board/setMines.js";
import { board } from "./gameBoard/data.js";

generateBoard(8);
generateCoordinates(8);
setMines(7);
