import styles from "../Experience/Experience.module.css";
import PersonOpinion1 from "../../assets/PersonOpinion1.png";
import PersonOpinion2 from "../../assets/PersonOpinion2.png";
import PersonOpinion3 from "../../assets/PersonOpinion3.png";

const Experience = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textBox}>
        <p className={styles.mainText}>Don’t take our word for it.</p>
        <div className={styles.smallTextBox}>
          <p className={styles.smallText}>
            Hear it from our expert community of traders who have made insane
            amounts in a short amount of time
          </p>
        </div>
      </div>
      <div className={styles.opinionBox}>
        <img src={PersonOpinion1} alt="PersonOpinion1" />
        <img src={PersonOpinion2} alt="PersonOpinion2" />
        <img src={PersonOpinion3} alt="PersonOpinion3" />
      </div>
    </div>
  );
};
export default Experience;
