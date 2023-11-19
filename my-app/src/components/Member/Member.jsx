import styles from "../Member/Member.module.css";
import Image1 from "../../assets/ImageOne.png";
import Image2 from "../../assets/ImageTwo.png";
import Image3 from "../../assets/ImageThree.png";
import Image4 from "../../assets/ImageFour.png";
import Image5 from "../../assets/ImageFive.png";
import Image6 from "../../assets/ImageSix.png";
import Image7 from "../../assets/ImageSeven.png";
import Person1 from "../../assets/person1.png";
import Person2 from "../../assets/person2.png";
import Person3 from "../../assets/person3.png";
import Person4 from "../../assets/person4.png";
import Person5 from "../../assets/person5.png";
import Person6 from "../../assets/person6.png";
import Person7 from "../../assets/person7.png";
import Person8 from "../../assets/person8.png";

const Member = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textBox}>
        <p className={styles.mainText}>Backed by the Best.</p>
      </div>
      <div className={styles.logoBox}>
        <img src={Image1} alt="Image1" />
        <img src={Image2} alt="Image2" />
        <img src={Image3} alt="Image3" />
        <img src={Image4} alt="Image4" />
        <img src={Image5} alt="Image5" />
        <img src={Image6} alt="Image6" />
        <img src={Image7} alt="Image7" />
      </div>
      <div className={styles.personBox}>
        <div>
          <img src={Person1} alt="Person1" />
          <p className={styles.personOne}>Utsav Somani</p>
        </div>
        <div>
          <img src={Person2} alt="Person2" />
          <p className={styles.personTwoMain}>Aditya Nagarsheth</p>
          <p className={styles.personTwo}>Perpetual Value Partners</p>
        </div>
        <div>
          <img src={Person3} alt="Person3" />
          <p className={styles.personOne}>Gokul Rajaram</p>
        </div>
        <div>
          <img src={Person4} alt="Person4" />
          <p className={styles.personTwoMain}>Sajid Rehman</p>
          <p className={styles.personTwo}> My Asia VC</p>
        </div>
        <div>
          <img src={Person5} alt="Person5" />
          <p className={styles.personTwoMain}>Arjun Sethi</p>
          <p className={styles.personTwo}>Tribe Capital</p>
        </div>
        <div>
          <img src={Person6} alt="Person6" />
          <p className={styles.personOne}>Kunal Shah</p>
        </div>
        <div>
          <img src={Person7} alt="Person7" />
          <p className={styles.personTwoMain}>Sandeep Nailawal</p>
          <p className={styles.personTwo}>Polygon Labs</p>
        </div>
        <div>
          <img src={Person8} alt="Person8" />
          <p className={styles.personOne}>Karn Vivek Nagpal</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
