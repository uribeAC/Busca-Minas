export type Cell = {
  hasMine: boolean;
  adjacentMinesTotal: number;
  state: "unopened" | "opened";
};

export type Board = {
  grid: Cell[][];
};
