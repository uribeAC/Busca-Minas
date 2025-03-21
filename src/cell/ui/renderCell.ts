import { Cell } from "../data/type";

export const renderCell = (cell: Cell, listCell: HTMLLIElement): void => {
  if (cell.hasMine) {
    renderMineCell(listCell);

    return;
  } else {
    renderEmptyCell(cell, listCell);

    return;
  }
};

const renderMineCell = (listCell: HTMLLIElement): void => {
  const mineCell = document.createElement("button");
  mineCell.classList.add("cell");
  mineCell.ariaLabel = "Open cell";

  const mineImage = document.createElement("img");
  mineImage.classList.add("hidden");
  mineImage.src = "/images/bomb-tile.svg";
  mineImage.width = 20;
  mineImage.height = 20;
  mineImage.alt = "Pixel art mine";

  listCell.appendChild(mineCell);
  mineCell.appendChild(mineImage);
};

const renderEmptyCell = (cell: Cell, listCell: HTMLLIElement): void => {
  const emptyCell = document.createElement("button");
  emptyCell.classList.add("cell");
  emptyCell.ariaLabel = "Open cell";

  emptyCell.textContent = `${cell.adjacentMinesTotal}`;

  listCell.appendChild(emptyCell);
};
