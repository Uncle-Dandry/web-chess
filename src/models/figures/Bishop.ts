import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '@/assets/black-bishop.svg';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.BISHOP;
    this.logo = blackLogo;
  }

  public canMove(target: Cell): boolean {
    return super.canMove(target)
      && this.cell.isEmptyDiagonal(target);
  }
}
