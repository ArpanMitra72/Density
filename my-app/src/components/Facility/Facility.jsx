import styles from "../Facility/Facility.module.css";
import Deposite from "../../assets/Deposite.png";
import Dedicated from "../../assets/Dedicated.png";

const Facility = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTextBox}>
        <p className={styles.mainText}>Start Small. Earn Big.</p>
        <div className={styles.smallTextBox}>
          <p className={styles.smallText}>
            Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
            relationship manager
          </p>
        </div>
      </div>
      <div className={styles.imageBox}>
        <img src={Deposite} alt="Deposite" width={553} height={450} />
        <img src={Dedicated} alt="Dedicated" width={553} height={450} />
      </div>
    </div>
  );
};
export default Facility;
