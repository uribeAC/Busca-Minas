import { completeBoard } from "../../index.js";

export const renderVictory = () => {
  const cells = completeBoard.flat();

  const emptyCells = cells.filter((cell) => cell.hasMine === false);

  const victory = emptyCells.every((cell) => cell.isOpen);

  if (victory) {
    console.log("victory");
  }
  /* const cellsElements = document.querySelectorAll(".cell");
  cellsElements.forEach((cell) => {
    cell.setAttribute("disabled", "");
  }); */
};

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) =>
  cell.addEventListener("click", () => {
    renderVictory;
  })
);
