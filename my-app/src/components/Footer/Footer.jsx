import styles from "../Footer/Footer.module.css";
import FooterLogo from "../../assets/FooterLogo.png";
import Facebook from "../../assets/Facebook.png";
import X from "../../assets/X.png";
import Linkdin from "../../assets/Linkdin.png";
import Instagram from "../../assets/Instagram.png";

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoSection}>
        <img src={FooterLogo} alt="Footer Logo" width={19.94} height={19.98} />
        <p className={styles.FooterLogoText}>density</p>
      </div>
      <div className={styles.textBox}>
        <div className={styles.optionSection}>
          <p className={styles.optionText}>Blog</p>
          <p className={styles.optionText}>Fees</p>
          <p className={styles.optionText}>Leaderboard</p>
          <p className={styles.optionText}>Careers</p>
          <p className={styles.optionText}>Contact Us</p>
          <p className={styles.optionText}>Privacy Policy</p>
        </div>
        <div className={styles.bottomTextBox}>
          <p className={styles.bottomText}>
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.{" "}
          </p>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <img src={Facebook} alt="Facebook" width={32.03} height={32.03} />
        <img src={X} alt="X" width={32.03} height={32.03} />
        <img src={Linkdin} alt="Linkdin" width={32.03} height={32.03} />
        <img src={Instagram} alt="Instagram" width={32.03} height={32.03} />
      </div>
    </div>
  );
};
export default Footer;
