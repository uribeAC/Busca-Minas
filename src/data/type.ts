export type Cell = {
  hasMine: boolean;
  adjacentMinesTotal: number;
  isOpen: boolean;
};

export type Board = Cell[][];
