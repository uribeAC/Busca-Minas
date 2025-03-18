import { board } from "../gameBoard/data.js";
import { Cell } from "../gameBoard/type.js";

export const generateBoard = (gridDimensions: number): void => {
  for (let positionY = 0; positionY < gridDimensions; positionY++) {
    board[positionY] = [];
    for (let positionX = 0; positionX < gridDimensions; positionX++) {
      const newCell: Cell = {
        hasMine: false,
        adjacentMinesTotal: 0,
        isOpen: false,
      };
      board[positionY][positionX] = newCell;
    }
    //console.log(board[positionY].join(" "));
  }
};
