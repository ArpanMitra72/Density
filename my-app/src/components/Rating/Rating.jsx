import styles from "../Rating/Rating.module.css";
const Rating = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerBox}>
        <div className={styles.adjustText}>
          <p className={styles.text}>00%</p>
          <p className={styles.smallText}>Conversion Fee</p>
        </div>
        <div className={styles.vector}></div>
        <div className={styles.adjustText}>
          <p className={styles.text}>500 Mn+</p>
          <p className={styles.smallText}>Lifetime Volume Traded</p>
        </div>
        <div className={styles.vector}></div>
        <div className={styles.adjustText}>
          <p className={styles.text}>250+</p>
          <p className={styles.smallText}>Total Tradable Pairs</p>
        </div>
        <div className={styles.vector}></div>
        <div className={styles.adjustText}>
          <p className={styles.text}>15,000+</p>
          <p className={styles.smallText}>Traders</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
