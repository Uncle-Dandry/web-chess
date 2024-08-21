import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '@/assets/black-rook.svg';

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.name = FigureNames.ROOK;
    this.logo = blackLogo;
  }

  public canMove(target: Cell): boolean {    
    return super.canMove(target) && (
      this.cell.isEmptyVertical(target)
      || this.cell.isEmptyHorizontal(target)
    );
  }
}
