import { completeBoard } from "../../index.js";
import { containerElement } from "../../index.js";
import { renderNewGame } from "./renderNewGame.js";

const createVictory = () => {
  const cells = completeBoard.flat();

  const emptyCells = cells.filter((cell) => cell.hasMine === false);

  const victory = emptyCells.every((cell) => cell.isOpen);

  if (victory) {
    const cellsButtonsElements = document.querySelectorAll(".cell");
    cellsButtonsElements.forEach((cell) => {
      const cellButtonElement = cell as HTMLButtonElement;
      cellButtonElement.disabled = true;
    });

    const victoryMessage = document.createElement("span");
    victoryMessage.classList.add("victory-message");
    victoryMessage.textContent = "Victory!";
    containerElement.appendChild(victoryMessage);

    renderNewGame(true);
  }
};

export const renderVictory = () => {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) =>
    cell.addEventListener("click", () => {
      createVictory();
    })
  );
};
