import styles from "../MiddleSection/MiddleSection.module.css";
import CoinDcx from "../../assets/CoinDcx.png";
import Density from "../../assets/Density.png";
import Delta from "../../assets/Delta.png";

const MiddleSection = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textBox}>
        <p className={styles.mainText}>
          Trade More. <a className={styles.styleText}>Pay Less.</a>
        </p>
        <p className={styles.smallText}>
          Our low Fees Supercharge Your Profits
        </p>
      </div>
      <div className={styles.contentBox}>
        <img src={CoinDcx} alt="CoinDcx" width={368.67} height={438} />
        <img src={Density} alt="Density" />
        <img src={Delta} alt="Delta" width={368.67} height={438} />
      </div>
    </div>
  );
};
export default MiddleSection;
