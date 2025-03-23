import { getAdjacentMinesTotal } from "../../board/getAdjacentMines.js";
import { renderGameOver } from "../../board/ui/renderGameOver.js";
import { completeBoard } from "../../index.js";
import { Cell } from "../data/type.js";

export const renderCellElement = (cell: Cell): HTMLElement => {
  const cellElement = document.createElement("button");
  cellElement.classList.add("cell");
  cellElement.ariaLabel = "Open cell";
  cellElement.addEventListener("click", () => {
    cell.isOpen = true;

    if (cell.hasMine) {
      cellElement.classList.add("cell--mine");
      cellElement.innerHTML = `
    <img class ="mine" src="/images/bomb-tile.svg" alt="Mine" />`;

      renderGameOver();
      return;
    }

    cellElement.classList.add("cell--opened");
    cellElement.textContent = getAdjacentMinesTotal(
      cell,
      completeBoard
    ).toString();
  });

  if (cell.hasMine) {
    cellElement.classList.add("game-over");
  }

  return cellElement;
};
