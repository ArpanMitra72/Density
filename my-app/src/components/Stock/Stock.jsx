import styles from "../Stock/Stock.module.css";
import Stocks from "../../assets/Stock.png";

const Stock = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textArea}>
        <div>
          <p className={styles.MainText}>
            Explore the Markets like it is your{" "}
            <a className={styles.styleText}>Playground.</a>
          </p>
        </div>
        <p className={styles.smallText}>
          Search for your favorite coins and stay ahead of the market
        </p>
      </div>
      <img src={Stocks} alt="Stocks" width={1134.91} height={671.31} />
      <div className={styles.buttonStyle}>
        <p className={styles.buttonText}>EXPLORE MARKETS</p>
      </div>
    </div>
  );
};
export default Stock;
