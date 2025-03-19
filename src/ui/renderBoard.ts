import { Board } from "../data/type.js";

const container = document.querySelector(".board") as HTMLUListElement;

export const renderBoard = (board: Board): void => {
  const cellsList = document.querySelector(".board")!;

  board.forEach((row) => {
    row.forEach((cell) => {
      const listCell = document.createElement("li");
      cellsList.appendChild(listCell);

      if (cell.hasMine) {
        const bombCell = document.createElement("button");
        bombCell.classList.add("cell");
        bombCell.classList.add("cell--bomb");
        bombCell.textContent = "X";

        listCell.appendChild(bombCell);
        return;
      } else {
        const emptyCell = document.createElement("button");
        emptyCell.classList.add("cell");
        emptyCell.textContent = "O";

        listCell.appendChild(emptyCell);
      }
      return;
    });
  });
};
