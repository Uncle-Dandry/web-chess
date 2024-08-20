import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '@/assets/black-knight.svg';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.name = FigureNames.KNIGHT;
    this.logo = blackLogo;
  }
}
