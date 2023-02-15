import { FC } from "react";
import styles from "./Stories.module.scss";
import story1 from "../../../../assets/story1.svg";
import story2 from "../../../../assets/story2.svg";
import story3 from "../../../../assets/story3.jpg";
import story4 from "../../../../assets/story4.jpg";

const Stories: FC = () => {
  return (
    <section>
      <ul className={styles.list}>
        <li className={styles.el}>
          <img className={styles.img} src={story1} />
        </li>
        <li className={styles.el}>
          <img className={styles.img} src={story2} />
        </li>
        <li className={styles.el}>
          <img className={styles.img} src={story3} />
        </li>
        <li className={styles.el}>
          <img className={styles.img} src={story4} />
        </li>
      </ul>
    </section>
  );
};

export default Stories;
