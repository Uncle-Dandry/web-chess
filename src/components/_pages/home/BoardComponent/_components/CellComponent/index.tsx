import type { FC } from 'react';

import { Cell } from '@/models/Cell';
import { Colors } from '@/models/Colors';

import styles from './CellComponent.module.css';

interface CellComponentProps {
  cell: Cell;
}

const CellComponent: FC<CellComponentProps> = ({
  cell: {
    color: cellColor,
    figure,
  },
}) => {
  return (
    <div
      className={
        `${
          styles.cell
        } ${
          cellColor === Colors.BLACK
            ? styles.black
            : styles.white
        }`
      }
    >
      {Boolean(figure?.logo) && (
        <img
          className={`${
            styles.figure
          }${
            figure?.color !== Colors.BLACK
              ? ` ${styles.whiteFigure}`
              : ''
          }`}
          loading="lazy"
          src={figure?.logo}
          alt={figure?.name}
        />
      )}
    </div>
  );
};

export default CellComponent;
