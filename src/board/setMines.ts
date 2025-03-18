import { board } from "../gameBoard/data.js";

export const generateCoordinates = (gridDimensions: number): number[] => {
  const minesTotal = Math.ceil(gridDimensions * gridDimensions * 0.15);

  const positionXY: number[] = [];

  for (let position = 0; position < gridDimensions; position++) {
    positionXY.push(Math.floor(Math.random() * minesTotal));
  }

  return positionXY;
};

export const setMines = (gridDimensions: number): void => {
  const minesTotal = Math.ceil(gridDimensions * gridDimensions * 0.15);

  const positionX = generateCoordinates(gridDimensions);
  const positionY = generateCoordinates(gridDimensions);

  console.log(positionX);
  console.log(positionY);
  for (let count = 0; count < minesTotal; count++) {
    board[positionX[count]][positionY[count]].hasMine = true;
  }
};
