import { generateUniqueId } from '@/utils';

import { Board } from './Board';
import { Colors } from './Colors';
import { Figure } from './figures/Figure';

export class Cell {
  readonly x: number;
  readonly y : number;
  readonly color: Colors;
  readonly id: string;
  figure: Figure | null;
  board: Board;
  available: boolean = false;

  constructor(x: number, y: number, color: Colors, board: Board, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.id = generateUniqueId();
    this.figure = figure;
    this.board = board;
    this.available = false;
  }

}
