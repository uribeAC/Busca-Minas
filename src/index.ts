import { cell } from "./game_board/data.js";
import { board } from "./game_board/data.js";
import { Cell } from "./game_board/type.js";

const gameBoard: string[][] = [];

for (let positionX = 0; positionX < board.rowsTotal; positionX++) {
  gameBoard[positionX] = [];
  for (let positionY = 0; positionY < board.columnsTotal; positionY++) {
    gameBoard[positionX][positionY] = "0";
  }
  console.log(gameBoard[positionX].join(" "));
}
