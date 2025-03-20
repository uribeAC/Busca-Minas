import { Cell } from "../data/type.js";
import { Board } from "../data/type.js";

export const getAdjacentCellsPositions = (
  cell: Cell,
  board: Board
): number[][] => {
  const positionY = cell.positionY;
  const positionX = cell.positionX;

  const adjacentPositions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  adjacentPositions.forEach((position) => {
    position[0] += positionY;
    position[1] += positionX;
  });

  const adjacentBoardPositions: number[][] = [];

  adjacentPositions.forEach((position) => {
    if (
      position[0] >= 0 &&
      position[0] < board.length &&
      position[1] >= 0 &&
      position[1] < board.length
    ) {
      adjacentBoardPositions.push(position);
    }
  });

  return adjacentBoardPositions;
};

export const getAdjacentMinesTotal = (
  cell: Cell,
  board: Board,
  adjacentCells?: number[][]
): number => {
  if (!adjacentCells) {
    adjacentCells = getAdjacentCellsPositions(cell, board);
  }

  let adjacentMines = 0;

  adjacentCells.forEach((position) => {
    const adjacentCellPositionY = position[0];
    const adjacentCellPositionX = position[1];

    if (board[adjacentCellPositionY][adjacentCellPositionX].hasMine) {
      adjacentMines++;
    }
  });

  return adjacentMines;
};
