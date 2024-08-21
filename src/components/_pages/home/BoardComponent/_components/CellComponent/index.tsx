import type { FC } from 'react';

import { Cell } from '@/models/Cell';
import { Colors } from '@/models/Colors';

import styles from './CellComponent.module.css';

interface CellComponentProps {
  selected?: boolean;
  cell: Cell;
  onCellClick: () => void;
}

const CellComponent: FC<CellComponentProps> = ({
  selected = false,
  cell: {
    available,
    color: cellColor,
    figure,
  },
  onCellClick,
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
        }${
          selected
            ? ` ${styles.selected}`
            : ''
        }`
      }
      onClick={onCellClick}
    >
      {!figure && available && (
        <span className={styles.cellAvailable} />
      )}

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
