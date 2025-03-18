import { generateBoard } from "./game/index.js";
import { board } from "./game_board/data.js";

generateBoard(3);

board.grid[0][0].hasMine = true;
board.grid[1][1].hasMine = true;

console.log(board.grid[0][0].hasMine);
console.log(board.grid[1][0].hasMine);
console.log(board.grid[1][1].hasMine);
