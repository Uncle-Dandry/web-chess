import { useEffect, useState } from 'react';

import { Board } from '@/models/Board';

import { BoardComponent } from '@/components/_pages/home';

import styles from './HomePage.module.css';

const HomePage = () => {
  const [board, setBoard] = useState<Board>(new Board());

  useEffect(
    () => {
      restart();
    },
    [],
  );

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();

    setBoard(newBoard);
  };

  return (
    <div className={styles.chessGameWrapper}>
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
};

export default HomePage;
