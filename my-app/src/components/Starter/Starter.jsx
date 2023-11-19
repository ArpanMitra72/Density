import styles from "../Starter/Starter.module.css";
import MobileStart from "../../assets/MobileStart.png";

const Starter = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textBox}>
        <p className={styles.mainText}>Get started now.</p>
      </div>
      <img
        src={MobileStart}
        alt="Mobile Start"
        width={544.09}
        height={1109.05}
      />
      <div className={styles.buttonBox}>
        <p className={styles.buttonText}>Start Trading!</p>
      </div>
    </div>
  );
};
export default Starter;
