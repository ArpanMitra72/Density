import styles from "../CoreMember/CoreMember.module.css";
import CEO from "../../assets/CEO.png";
import CTO from "../../assets/CTO.png";
import CBO from "../../assets/CBO.png";

const CoreMember = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textArea}>
        <p className={styles.mainText}>
          Meet the <a className={styles.styleText}>Visionaries</a> behind
          Density.
        </p>
      </div>
      <div className={styles.memberArea}>
        <img src={CEO} alt="CEO" width={323} height={360} />
        <img src={CTO} alt="CTO" width={323} height={360} />
        <img src={CBO} alt="CBO" width={323} height={360} />
      </div>
    </div>
  );
};
export default CoreMember;
