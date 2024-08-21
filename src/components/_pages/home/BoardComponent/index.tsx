import {
  type FC,
  Fragment,
  useEffect,
  useState,
} from 'react';

import { Board } from '@/models/Board';
import { Cell } from '@/models/Cell';
import { Player } from '@/models/Player';

import { CellComponent } from './_components';

import styles from './BoardComponent.module.css';

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardComponentProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
  };

  useEffect(
    () => {
      highlightCells();
    },
    [selectedCell],
  );

  const handleSelectCell = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell
      && selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer()
      setSelectedCell(null);
      updateBoard()
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  };

  return (
    <div className={styles.chessBoard}>
      {board.cells.map((col, colIndex) => (
        <Fragment key={colIndex}>
          {col.map((cell, cellIndex) => (
            <CellComponent
              key={`${cellIndex}-${colIndex}`}
              selected={
                selectedCell?.x === cell.x
                && selectedCell?.y === cell.y
              }
              cell={cell}
              onCellClick={handleSelectCell.bind(null, cell)}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
