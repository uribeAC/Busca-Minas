import { Board } from "../data/type.js";
import { renderCellElement } from "../../cell/ui/renderCell.js";

export const createBoardElement = (board: Board): HTMLElement => {
  const boardElement = document.createElement("ul");
  boardElement.classList.add("board");

  const cells = board.flat();

  cells.forEach((cell) => {
    const cellContainer = document.createElement("li");
    cellContainer.classList.add("cell-container");
    boardElement.appendChild(cellContainer);

    const cellElement = renderCellElement(cell);
    cellContainer.appendChild(cellElement);
  });

  return boardElement;
};

export const renderBoard = (
  boardElement: HTMLElement,
  container: HTMLElement,
  elementReference?: HTMLElement
): void => {
  if (!elementReference) {
    container.appendChild(boardElement);
    return;
  }

  container.insertBefore(boardElement, elementReference);
};
