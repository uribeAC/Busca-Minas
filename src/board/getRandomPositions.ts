import { Board } from "./data/type.js";

export const getRandomPositions = (board: Board): number[] => {
  const boardDimension = board.length;

  const minesTotal = Math.floor(boardDimension * boardDimension * 0.15);

  const xyPositions: number[] = [];

  for (let position = 0; position <= minesTotal; position++) {
    xyPositions.push(Math.floor(Math.random() * boardDimension));
  }
  //xyPositions;
  return [0, 0];
};
