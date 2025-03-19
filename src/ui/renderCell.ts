import { Cell } from "../data/type.js";

export const renderCell = (cell: Cell, listCell: HTMLLIElement): void => {
  if (cell.hasMine) {
    renderMineCell(listCell);

    return;
  } else {
    renderEmptyCell(listCell);

    return;
  }
};

const renderMineCell = (listCell: HTMLLIElement): void => {
  const mineCell = document.createElement("button");
  mineCell.classList.add("cell");

  const mineImage = document.createElement("img");
  mineImage.classList.add("hidden");
  mineImage.src = "/images/bomb-tile.svg";
  mineImage.width = 20;
  mineImage.height = 20;

  listCell.appendChild(mineCell);
  mineCell.appendChild(mineImage);
};

const renderEmptyCell = (listCell: HTMLLIElement): void => {
  const emptyCell = document.createElement("button");
  emptyCell.classList.add("cell");

  listCell.appendChild(emptyCell);
};
