import { generateBoard } from "./board/generateBoard.js";
import { setMines } from "./board/setMines.js";
import { generateCoordinates } from "./board/generateCoordinates.js";

export const board = generateBoard(8);
generateCoordinates();
setMines();

board.forEach((row) => {
  const terminalBoard: string[] = [];
  row.forEach((position) => {
    if (position.hasMine) {
      terminalBoard.push("X");
    } else {
      terminalBoard.push("O");
    }
  });
  console.log(terminalBoard.join("  "));
});
