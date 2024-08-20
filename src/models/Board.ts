import { CELLS_PER_RAW } from '@/constants/main';

import { Cell } from './Cell';
import { Colors } from './Colors';
import { Queen } from './figures/Queen';

export class Board {
  cells: Cell[][] = [];
  lostBlack: number = 0;
  lostWhite: number = 0;

  public initCells() {
    for (let i = 0; i < CELLS_PER_RAW; i++) {
      const row: Cell[] = [];

      for (let j = 0; j < CELLS_PER_RAW; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(j, i, Colors.BLACK, this, null));
        } else {
          row.push(new Cell(j, i, Colors.WHITE, this, null));
        } 
      }

      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public addFigures() {
    new Queen(Colors.WHITE, this.getCell(3, 3));
  }
}
