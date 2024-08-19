import styles from './HomePage.module.css';

const HomePage = () => {
  const rows = Array(8).fill(null);
  const cols = Array(8).fill(null);

  return (
    <div className={styles.chessBoardWrapper}>
      <div className={styles.chessBoard}>
        {rows.map((_, rowIndex) =>
          cols.map((_, colIndex) => {
            const isBlack = (rowIndex + colIndex) % 2 === 0;

            return (
              <div
                className={`cell ${isBlack ? styles.black : styles.white}`}
                key={`${rowIndex}-${colIndex}`}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomePage;
