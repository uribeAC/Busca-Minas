import { Board, Cell } from "../data/type.js";

const container = document.querySelector(".board") as HTMLUListElement;

export const renderBoard = (board: Board): void => {
  const cellsList = document.querySelector(".board")!;

  board.forEach((row) => {
    row.forEach((cell) => {
      const listCell = document.createElement("li");
      cellsList.appendChild(listCell);

      if (cell.hasMine) {
        const mineCell = document.createElement("button");
        mineCell.classList.add("cell");

        const mineImage = document.createElement("img");
        mineImage.classList.add("hidden");
        mineImage.src = "/images/bomb-tile.svg";
        mineImage.width = 20;
        mineImage.height = 20;

        listCell.appendChild(mineCell);
        mineCell.appendChild(mineImage);
        return;
      } else {
        const emptyCell = document.createElement("button");
        emptyCell.classList.add("cell");

        listCell.appendChild(emptyCell);
      }
      return;
    });
  });
};
