import { Cell } from "../data/type.js";
import { Board } from "../data/type.js";

export const getAdjacentMines = (cell: Cell, board: Board): number => {
  const positionY = cell.positionY;
  const positionX = cell.positionX;

  const adjacentCells = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let adjacentMines = 0;

  adjacentCells.forEach((position) => {
    const adjacentCellPositionY = position[0] + positionY;
    const adjacentCellPositionX = position[1] + positionX;

    const clausulaGuarda =
      adjacentCellPositionX >= 0 &&
      adjacentCellPositionX < board.length &&
      adjacentCellPositionY >= 0 &&
      adjacentCellPositionY < board.length;

    if (clausulaGuarda) {
      console.log(board[adjacentCellPositionY][adjacentCellPositionX]);
      if (board[adjacentCellPositionY][adjacentCellPositionX].hasMine) {
        adjacentMines++;
        console.log("YES");
      }
    }
  });

  return adjacentMines;
};
