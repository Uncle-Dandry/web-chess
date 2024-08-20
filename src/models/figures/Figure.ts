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
  color: Colors;
  logo: string;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = '';
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    return true;
  }

  moveFigure(target: Cell) {
    
  }
}
