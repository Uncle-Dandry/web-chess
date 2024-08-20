import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '@/assets/black-queen.svg';

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.name = FigureNames.QUEEN;
    this.logo = blackLogo;
  }
}
