import { generateBoard } from "./board/generateBoard.js";
import { setMines } from "./board/setMines.js";
import { generateCoordinates } from "./board/setMines.js";
import { board } from "./gameBoard/data.js";

generateBoard(6);
generateCoordinates(6);
setMines(6);

for (let positionY = 0; positionY < 5; positionY++) {
  for (let positionX = 0; positionX < 5; positionX++) {
    console.log(board[positionY][positionX].hasMine);
  }
}
