import { containerElement } from "../../index.js";
import { renderNewGame } from "./renderNewGame.js";

export const renderGameOver = () => {
  const cellsButtonsElements = document.querySelectorAll(".cell");
  cellsButtonsElements.forEach((cell) => {
    const cellButtonElement = cell as HTMLButtonElement;
    cellButtonElement.disabled = true;
  });

  const cellsElements = document.querySelectorAll(".game-over");
  cellsElements.forEach((cellElement) => {
    cellElement.innerHTML = `
      <img class ="mine" src="/images/bomb-tile.svg" alt="Mine" />`;
  });

  const gameOverMessage = document.createElement("span");
  gameOverMessage.classList.add("game-over-message");
  gameOverMessage.textContent = "Game Over";
  containerElement.appendChild(gameOverMessage);

  renderNewGame(false);
};
