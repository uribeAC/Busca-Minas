import { getAdjacentMinesTotal } from "../../board/getAdjacentMines.js";
import { completeBoard } from "../../index.js";
import { Cell } from "../data/type.js";

export const renderCellElement = (cell: Cell): HTMLElement => {
  const cellElement = document.createElement("button");
  cellElement.classList.add("cell");
  cellElement.ariaLabel = "Open cell";
  cellElement.addEventListener("click", () => {
    cell.isOpen = true;

    if (cell.hasMine) {
      cellElement.innerHTML = `
    <img src="/images/bomb-tile.svg" alt="Mine" width="20" height="20"/>`;
      return;
    }

    cellElement.textContent = getAdjacentMinesTotal(
      cell,
      completeBoard
    ).toString();
  });

  return cellElement;
};
