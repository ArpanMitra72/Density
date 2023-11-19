import styles from "../Annousement/Annousement.module.css";
import annouse from "../../assets/Annouse.png";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";

const Annousement = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.upperBox}>
        <img src={annouse} alt="annouse" width={247.72} height={228.77} />
        <div className={styles.textArea}>
          <p className={styles.mainText}>
            Earn Money. <a className={styles.styleText}>The Easy Way.</a>
          </p>
          <div className={styles.smallTextBox}>
            <p className={styles.smallText}>
              No Complexity of Trading Fee, generate volume and win
            </p>
          </div>
        </div>
      </div>
      <div className={styles.middleBox}>
        <img src={pic1} alt="pic1" width={323} height={323} />
        <img src={pic2} alt="pic2" width={323} height={323} />
        <img src={pic3} alt="pic3" width={323} height={323} />
      </div>
      <div className={styles.ButtonContainer}>
        <p className={styles.ButtonText}>start earning now</p>
      </div>
    </div>
  );
};
export default Annousement;
