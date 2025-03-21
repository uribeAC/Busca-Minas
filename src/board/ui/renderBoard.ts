import { Board } from "../data/type.js";
import { Cell } from "../../cell/data/type.js";
import { renderCell } from "../../cell/ui/renderCell.js";

export const renderBoard = (board: Board): void => {
  const cellsList = document.querySelector(".board")!;

  board.forEach((row) => {
    row.forEach((cell) => {
      const cellList = document.createElement("li");
      cellList.classList.add("cell-list");
      cellsList.appendChild(cellList);

      renderCell(cell, cellList);

      return;
    });
  });
};
