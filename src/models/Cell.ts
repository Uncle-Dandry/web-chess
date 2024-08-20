import { Board } from './Board';
import { Colors } from './Colors';
import { Figure } from './figures/Figure';

export class Cell {
  readonly x: number;
  readonly y : number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  available: boolean = false;
  id: number;

  constructor(x: number, y: number, color: Colors, board: Board, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.id = x + y * 8;
    this.available = false;
  }

}
