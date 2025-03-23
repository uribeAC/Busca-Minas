import { Board } from "../data/type.js";

export const renderMinesTotal = (board: Board) => {
  const minesTotalElement = document.querySelector(".total-mines");

  if (!minesTotalElement) {
    return;
  }

  const cells = board.flat();
  let minesTotal = 0;

  cells.forEach((cell) => {
    if (cell.hasMine) {
      minesTotal++;
    }
  });

  for (let count = 0; count <= minesTotal; count++) {
    setTimeout(() => {
      minesTotalElement.textContent = `Mines: ${count}`;
    }, 200 * count);
  }
};
