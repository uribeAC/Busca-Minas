import { containerElement } from "../../index.js";

export const renderNewGame = (victory: boolean) => {
  const newGameButton = document.createElement("button");
  newGameButton.classList.add("new-game");

  const newGameClass = victory ? "new-game--victory" : "new-game--lose";
  newGameButton.classList.add(newGameClass);

  newGameButton.textContent = "New Game";
  containerElement.appendChild(newGameButton);

  newGameButton.addEventListener("click", () => {
    location.reload();
  });
};
