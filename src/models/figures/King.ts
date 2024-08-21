import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '@/assets/black-king.svg';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.KING;
    this.logo = blackLogo;
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy <= 1) || (dy === 1 && dx <= 1);

    // TODO: Add in Cell isDangerous and finish King, and king-to-king behaviour
    // TODO: Check code style, try reuse canMove partly
    // TODO: integrate with stockfish
    // TODO: add losts and mb timer, ux features for game steps
    // TODO: try glass style with animations
    // TODO: Add a plain by tips functionality for new users
    // TODO: Add difficalty levels
    // TODO: try websockets with remote signals
  }
}
