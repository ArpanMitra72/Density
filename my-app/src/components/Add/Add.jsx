import styles from "../Add/Add.module.css";
import FirstAdd from "../../assets/FirstAdd.png";
import SecondAdd from "../../assets/SecondAdd.png";
import ThirdAdd from "../../assets/ThirdAdd.png";
const Add = () => {
  return (
    <div className={styles.mainContainer}>
      <img src={FirstAdd} alt="Fisr Image" width={276} height={560} />
      <img src={SecondAdd} alt="Second Image" width={276} height={560} />
      <img src={ThirdAdd} alt="Third Image" width={276} height={560} />
    </div>
  );
};
export default Add;
