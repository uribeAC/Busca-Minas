import { board } from "../game_board/data.js";
import { Cell } from "../game_board/type.js";

export const generateBoard = (gridDimensions: number): void => {
  for (let positionX = 0; positionX < gridDimensions; positionX++) {
    board.grid[positionX] = [];
    for (let positionY = 0; positionY < gridDimensions; positionY++) {
      const newCell: Cell = {
        hasMine: false,
        adjacentMinesTotal: 0,
        state: "unopened",
      };
      board.grid[positionX][positionY] = newCell;
    }
    console.log(board.grid[positionX].join(" "));
  }
};
