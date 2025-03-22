import { Board } from "../data/type.js";

const gameOver = (board: Board) => {
  const cells = board.flat();

  cells.forEach((cell) => {
    if (cell.hasMine && cell.isOpen) {
      console.log("game over");
    }
  });
};

export const renderGameOver = (board: Board) => {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      gameOver(board);
    });
  });
};
