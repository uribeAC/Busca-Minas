import { generateCell } from "../factory/generateCell";

describe("Given the generateCell function", () => {
  describe("When its called", () => {
    test("Then it should return a cell with no mine", () => {
      const cell = generateCell();

      const expectedHasMine = false;
      const actualHasMine = cell.hasMine;

      expect(actualHasMine).toBe(expectedHasMine);
    });

    test("Then it should return a cell with no adjacent mines", () => {
      const cell = generateCell();

      const expectedAdjacentMinesTotal = 0;
      const actualAdjacentMinesTotal = cell.adjacentMinesTotal;

      expect(actualAdjacentMinesTotal).toBe(expectedAdjacentMinesTotal);
    });

    test("Then it should return a cell unopened", () => {
      const cell = generateCell();

      const expectedIsOpen = false;
      const actualIsOpen = cell.isOpen;

      expect(actualIsOpen).toBe(expectedIsOpen);
    });
  });
});
