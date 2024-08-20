import type { FC } from 'react';

import { Cell } from '@/models/Cell';

import styles from './CellComponent.module.css';

interface CellComponentProps {
  colorBlack: boolean;
  cell: Cell;
}

const CellComponent: FC<CellComponentProps> = ({
  colorBlack = true,
  cell,
}) => {
  return (
    <div
      className={
        `${
          styles.cell
        } ${
          colorBlack
            ? styles.black
            : styles.white
        }`
      }
    >
      {cell?.figure?.logo && (
        <img
          className={styles.figure}
          alt="figure"
          src={cell.figure.logo}
        />
      )}
    </div>
  );
};

export default CellComponent;
