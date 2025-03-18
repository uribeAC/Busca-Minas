import { cell } from "./game_board/data.js";
import { board } from "./game_board/data.js";
import { Cell } from "./game_board/type.js";

const gridTotal = 9;

for (let positionX = 0; positionX < gridTotal; positionX++) {
  board.grid[positionX] = [];
  for (let positionY = 0; positionY < gridTotal; positionY++) {
    board.grid[positionX][positionY] = cell;
  }
  console.log(board.grid[positionX].join(" "));
}

board.grid[0][0].hasMine = true;

console.log(board.grid[0][0].hasMine);
