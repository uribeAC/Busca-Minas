import { Cell } from "../data/type.js";

export const generateCell = (): Cell => {
  const cell: Cell = {
    hasMine: false,
    adjacentMinesTotal: 0,
    isOpen: false,
    positionY: 0,
    positionX: 0,
  };

  return cell;
};
