import { generateUniqueId } from '@/utils';

import { Board } from './Board';
import { Colors } from './Colors';
import { Figure } from './figures/Figure';

export class Cell {
  readonly x: number;
  readonly y : number;
  readonly color: Colors;
  readonly id: string;
  available: boolean = false;
  figure: Figure | null;
  board: Board;

  constructor(
    x: number,
    y: number,
    color: Colors,
    board: Board,
    figure: Figure | null,
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.id = generateUniqueId();
    this.available = false;
    this.figure = figure;
    this.board = board;
  }

  public isEmpty(): boolean {
    return this.figure === null;
  }

  public isEnemy(target: Cell): boolean {
    return target.figure !== null && this.figure?.color !== target.figure.color;
  }

  public isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) return false;

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);

    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false;
      }
    }

    return true;
  }

  public isEmptyHorizontal(target: Cell): boolean {
    if (this.y !== target.y) return false;

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);

    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false;
      }
    }

    return true;
  }

  public isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);

    if (absY !== absX) return false;

    const dy = this.y < target.y ? 1 : -1;
    const dx = this.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i++) {
      if (!this.board.getCell(this.x + dx*i, this.y + dy * i).isEmpty()) {
        return false;
      }
    }

    return true;
  }

  public moveFigure(target: Cell) {
    if (this.figure?.canMove(target)) {
      this.figure.moveFigure(target);

      if (target.figure) {
        this.addLostFigure(target.figure);
      }

      target.setFigure(this.figure);
      this.figure = null;
    }
  }

  public setFigure(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this;
  }

  public addLostFigure(figure: Figure) {
    if (figure.color === Colors.BLACK) {
      this.board.lostBlack.push(figure);
    } else {
      this.board.lostWhite.push(figure);
    }
  }
}
