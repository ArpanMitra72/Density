import styles from "../UserManual/UserManual.module.css";
import FirstUserManual from "../../assets/firstUserMobile.png";
import SecondUserManual from "../../assets/SecondUserMobile.png";
import ThirdUserManual from "../../assets/ThirdUserMobile.png";
import NumberOneIcon from "../../assets/NumberOneIcon.png";
import UserIcon from "../../assets/UserIcon.png";
import GrowthIcon from "../../assets/GrowthIcon.png";

const UserManual = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textBox}>
        <p className={styles.mainText}>
          Derivates made simple in <a className={styles.styleText}>3 Easy </a>
          Steps
        </p>
      </div>
      <div className={styles.imageBox}>
        <div className={styles.contentBox}>
          <img
            src={FirstUserManual}
            alt="FirstUserManual"
            width={645.78}
            height={645.78}
          />
          <div className={styles.RightSideBox}>
            <img src={UserIcon} alt="User Icon" width={119.56} height={120} />
            <p className={styles.BoxMainText}>Create an Account</p>
            <p className={styles.BoxSmallText}>
              Register & Complete your Verification in less than 2 minutes
            </p>
            <div className={styles.buttonStyle}>
              <p className={styles.buttonText}>Trade Now</p>
            </div>
          </div>
        </div>
        <div className={styles.vector}></div>
        <div className={styles.contentBox}>
          <img
            src={SecondUserManual}
            alt="Second User Manual"
            width={645.78}
            height={645.78}
          />
          <div className={styles.RightSideBox}>
            <img
              src={NumberOneIcon}
              alt="Number One Icon"
              width={119.56}
              height={120}
            />
            <p className={styles.BoxMainText}>Deposit Funds</p>
            <p className={styles.BoxSmallText}>
              Add funds quickly using a variety of payment methods
            </p>
            <div className={styles.buttonStyle}>
              <p className={styles.buttonText}>Trade Now</p>
            </div>
          </div>
        </div>
        <div className={styles.vector}></div>
        <div className={styles.contentBox}>
          <img
            src={ThirdUserManual}
            alt="ThirdUserManual"
            width={645.78}
            height={645.78}
          />
          <div className={styles.RightSideBox}>
            <img
              src={GrowthIcon}
              alt="Growth Icon"
              width={119.56}
              height={120}
            />
            <p className={styles.BoxMainText}>Become a Trader</p>
            <p className={styles.BoxSmallText}>
              Choose Your Trading Pair & Trade Seamlessly
            </p>
            <div className={styles.buttonStyle}>
              <p className={styles.buttonText}>Trade Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserManual;
