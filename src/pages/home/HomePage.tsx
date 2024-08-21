import { useEffect, useState } from 'react';

import { Board } from '@/models/Board';
import { Colors } from '@/models/Colors';
import { Player } from '@/models/Player';

import { BoardComponent } from '@/components/_pages/home';

import styles from './HomePage.module.css';

const HomePage = () => {
  const [board, setBoard] = useState<Board>(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(
    () => {
      restart();
      setCurrentPlayer(whitePlayer);
    },
    [whitePlayer],
  );

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.setupFigures();

    setBoard(newBoard);
  };

  const swapPlayer = () => {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE
        ? blackPlayer
        : whitePlayer
    );
  };

  return (
    <div className={styles.chessGameWrapper}>
      <BoardComponent
        board={board}
        currentPlayer={currentPlayer}
        setBoard={setBoard}
        swapPlayer={swapPlayer}
      />
    </div>
  );
};

export default HomePage;
