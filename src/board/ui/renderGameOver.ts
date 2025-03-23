import { containerElement } from "../../index.js";
import { renderNewGame } from "./renderNewGame.js";

export const renderGameOver = () => {
  const cellsButtonsElements = document.querySelectorAll(
    ".cell"
  ) as NodeListOf<HTMLButtonElement>;
  cellsButtonsElements.forEach((cellButtonElement) => {
    cellButtonElement.disabled = true;
  });

  const cellsElements = document.querySelectorAll(".game-over");
  cellsElements.forEach((cellElement) => {
    cellElement.innerHTML = `
      <img class="mine" src="/images/bomb-tile.webp" alt="Mine" width="15" heigth="15">`;
  });

  const gameOverMessage = document.createElement("span");
  gameOverMessage.classList.add("game-over-message");
  gameOverMessage.textContent = "Game Over";
  containerElement.appendChild(gameOverMessage);

  renderNewGame(false);
};
