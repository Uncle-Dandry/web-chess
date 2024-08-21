import {
  Bishop,
  King,
  Knight,
  Pawn,
  Queen,
  Rook,
} from '@/models/figures';

export const CELLS_PER_ROW = 8;

export const FIGURES_ARRANGEMENT = {
  firstLine: [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook],
  pawns: Array<typeof Pawn>(CELLS_PER_ROW).fill(Pawn),
};
