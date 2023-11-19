import styles from "../NavBar/NavBar.module.css";
import Icon from "../../assets/Icon.png";

const NavBar = () => {
  return (
    <nav className={styles.fullNavbar}>
      <div className={styles.IcontextAndPic}>
        <img src={Icon} alt="Icon" width={15.72} height={15.57} />
        <p className={styles.iconText}>density</p>
      </div>
      <div className={styles.rightPortion}>
        <div className={styles.navigatingItems}>
          <p className={styles.text}>Career</p>
          <p className={styles.text}>Blogs</p>
          <p className={styles.text}>Leaderboard</p>
          <p className={styles.text}>Fees</p>
        </div>
        <button className={styles.lastButton} type="submit">
          <p className={styles.buttonText}>TRADE NOW</p>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
