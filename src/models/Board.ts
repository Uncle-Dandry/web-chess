import { CELLS_PER_RAW } from '@/constants/main';

import { Cell } from './Cell';
import { Colors } from './Colors';

import { Bishop } from './figures/Bishop';

export class Board {
  cells: Cell[][] = [];
  lostBlack: number = 0;
  lostWhite: number = 0;

  public initCells() {
    for (let i = 0; i < CELLS_PER_RAW; i++) {
      const row: Cell[] = [];

      for (let j = 0; j < CELLS_PER_RAW; j++) {
        row.push(new Cell(
          j,
          i,
          (i + j) % 2 !== 0 // check is counting
            ? Colors.BLACK
            : Colors.WHITE,
          this,
          null,
        ));
      }

      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public addFigures() {
    new Bishop(Colors.WHITE, this.getCell(3, 3));
  }
}
