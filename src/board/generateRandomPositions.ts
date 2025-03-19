import { board } from "../index.js";

export const generateRandomPositions = (): number[] => {
  const boardDimension = board.length;

  const minesTotal = Math.floor(boardDimension * boardDimension * 0.15);

  const xyPositions: number[] = [];

  for (let position = 0; position <= minesTotal; position++) {
    xyPositions.push(Math.floor(Math.random() * boardDimension));
  }

  return xyPositions;
};
