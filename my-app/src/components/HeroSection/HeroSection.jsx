import styles from "../HeroSection/HeroSection.module.css";
import MainImage from "../../assets/main.png";
import MainPhoneImage from "../../assets/MainPhoneImage.png";
import MainShadow from "../../assets/MainShadow.png";
import LeftMain from "../../assets/LeftMain.png";
import LeftPhoneImage from "../../assets/LeftPhoneImage.png";
import RightMain from "../../assets/RightMain.png";
import RightPhoneImage from "../../assets/RightPhoneImage.png";

const HeroSection = () => {
  const containerStyle = {
    backgroundImage: `url(${MainShadow})`,
    backgroundSize: "cover", // Adjust this based on your needs
    position: "relative",
  };
  return (
    <div className={styles.mainContainer} style={containerStyle}>
      <div className={styles.textArea}>
        <p className={styles.MainText}>
          It’s time to trade,
          <br />
          the <a className={styles.styleText}>future.</a>
        </p>
        <p className={styles.smallText}>
          Trade BTC, ETH Futures with 125x leverage and earn rewards.
        </p>
      </div>

      <div className={styles.ImageContainer}>
        <div className={styles.Main}>
          <img src={MainImage} alt="Main" className={styles.MainImages} />
          <img
            src={MainPhoneImage}
            alt="MainPhone"
            className={styles.MainPhoneImages}
          />
        </div>

        <div className={styles.leftImages}>
          <img src={LeftMain} alt="LeftMain" className={styles.leftMainImage} />
          <img
            src={LeftPhoneImage}
            alt="LeftPhone"
            className={styles.leftPhoneImage}
          />
        </div>

        {/* RightMain and RightPhoneImage on the right side */}
        <div className={styles.rightImages}>
          <img
            src={RightMain}
            alt="RightMain"
            className={styles.rightMainImage}
          />
          <img
            src={RightPhoneImage}
            alt="RightPhone"
            className={styles.rightPhoneImage}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
