import { Board, Cell } from "../data/type.js";
import { renderCell } from "./renderCell.js";

export const renderBoard = (board: Board): void => {
  const cellsList = document.querySelector(".board")!;

  board.forEach((row) => {
    row.forEach((cell) => {
      const listCell = document.createElement("li");
      cellsList.appendChild(listCell);

      renderCell(cell, listCell);

      return;
    });
  });
};
