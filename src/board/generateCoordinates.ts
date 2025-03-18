import { board } from "../index";

export const generateCoordinates = (): number[] => {
  const gridDimension = board.length;

  const minesTotal = Math.floor(gridDimension * gridDimension * 0.15);

  const positionXY: number[] = [];

  for (let position = 0; position <= minesTotal; position++) {
    positionXY.push(Math.floor(Math.random() * gridDimension));
  }

  return positionXY;
};
