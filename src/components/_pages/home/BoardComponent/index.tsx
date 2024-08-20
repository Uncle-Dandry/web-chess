import { type FC, Fragment } from 'react';

import { Board } from '@/models/Board';

import { CellComponent } from './_components';

import styles from './BoardComponent.module.css';

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardComponentProps> = ({
  board,
  setBoard,
}) => {
  return (
    <div className={styles.chessBoard}>
      {board.cells.map((col, colIndex) => (
        <Fragment key={colIndex}>
          {col.map((cell, cellIndex) => (
            <CellComponent
              key={`${cellIndex}-${colIndex}`}
              cell={cell}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
