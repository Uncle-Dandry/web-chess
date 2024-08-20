import {
  CELLS_PER_RAW,
  FIGURES_ARRANGEMENT,
} from '@/constants/main';

import { Cell } from './Cell';
import { Colors } from './Colors';
import { Figure } from './figures';

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

  private addFiguresRow(
    figures: (typeof Figure)[],
    isPawnRow = false,
  ) {
    figures.forEach((figure, col) => {
      new figure(
        Colors.BLACK,
        this.getCell(
          col,
          isPawnRow ? 1 : 0,
        ),
      );

      new figure(
        Colors.WHITE,
        this.getCell(
          col,
          isPawnRow ? 6 : 7,
        ),
      );
    });
  }

  public setupFigures() {
    this.addFiguresRow(FIGURES_ARRANGEMENT.firstLine);
    this.addFiguresRow(FIGURES_ARRANGEMENT.pawns, true);
  }
}
