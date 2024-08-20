import { generateUniqueId } from '@/utils';

import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum FigureNames {
  'FIGURE' = 'Figure',
  'KING' = 'King',
  'QUEEN' = 'Queen',
  'BISHOP' = 'Bishop',
  'KNIGHT' = 'Knight',
  'ROOK' = 'Rook',
  'PAWN' = 'Pawn',
}

export class Figure {
  id: string;
  color: Colors;
  logo: string;
  cell: Cell;
  name: FigureNames;

  constructor(color: Colors, cell: Cell) {
    this.id = generateUniqueId();
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.name = FigureNames.FIGURE;
    this.logo = '';
  }

  private canMove(target: Cell): boolean {
    return true;
  }

  public moveFigure(target: Cell) {
    
  }
}
