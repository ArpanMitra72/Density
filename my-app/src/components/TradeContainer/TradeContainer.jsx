import styles from "../TradeContainer/TradeContainer.module.css";
import TradeContainerImage from "../../assets/TradeContainer.png";

const TradeContainer = () => {
  return (
    <div className={styles.MainContainer}>
      <img
        src={TradeContainerImage}
        alt="Trade Container Image"
        width={1446}
        height={797}
      />
    </div>
  );
};
export default TradeContainer;
