import { Cell } from "./type.js";
import { Board } from "./type.js";

export const cell: Cell = {
  hasMine: false,
  adjacentMinesTotal: 0,
  state: "unopened",
};

export const board: Board = {
  grid: [],
};
