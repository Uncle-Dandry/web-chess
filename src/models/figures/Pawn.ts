import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '@/assets/black-pawn.svg';

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.name = FigureNames.PAWN;
    this.logo = blackLogo;
  }
}
