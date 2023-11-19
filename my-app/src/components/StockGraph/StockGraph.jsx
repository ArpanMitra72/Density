import styles from "../StockGraph/StockGraph.module.css";
import ShareGraph from "../../assets/ShareGraph.png";

const StockGraph = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTextBox}>
        <p className={styles.mainText}>
          <a className={styles.styleText}>Unlock</a> New Frontiers.
        </p>
        <div className={styles.miniTextBox}>
          <p className={styles.miniText}>
            Are you a stock trader looking for new opportunities to make money?
            We got you covered!
          </p>
        </div>
      </div>
      <div className={styles.middleTextBox}>
        <div className={styles.insideTextBox}>
          <p className={styles.insideText}>Same Strategies</p>
        </div>
        <div className={styles.vector}></div>
        <div className={styles.insideTextBox}>
          <p className={styles.insideText}>Same Indicators</p>
        </div>
        <div className={styles.vector}></div>
        <div className={styles.insideTextBox}>
          <p className={styles.insideText}>Better Leverage</p>
        </div>
        <div className={styles.vector}></div>
        <div className={styles.insideTextBox}>
          <p className={styles.insideText}>24x7 Tradings</p>
        </div>
      </div>
      <img src={ShareGraph} alt="Share Graph" width={1130} height={510} />
    </div>
  );
};

export default StockGraph;
