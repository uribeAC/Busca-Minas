export type Cell = {
  hasMine: boolean;
  adjacentMinesTotal: number;
  isOpen: boolean;
  positionY: number;
  positionX: number;
};

export type Board = Cell[][];
