import { containerElement } from "../../index.js";

export const renderNewGame = (victory: boolean) => {
  const newGameButton = document.createElement("button");
  newGameButton.classList.add("new-game");

  if (victory) {
    newGameButton.classList.add("new-game--victory");
  }

  newGameButton.textContent = "New Game";
  containerElement.appendChild(newGameButton);

  newGameButton.addEventListener("click", () => {
    location.reload();
  });
};
