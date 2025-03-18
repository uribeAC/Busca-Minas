import { board } from "../index.js";
import { generateCoordinates } from "./generateCoordinates.js";

export const setMines = (): void => {
  const positionY = generateCoordinates();
  const positionX = generateCoordinates();

  for (let count = 0; count < positionX.length; count++) {
    board[positionY[count]][positionX[count]].hasMine = true;
  }
};
