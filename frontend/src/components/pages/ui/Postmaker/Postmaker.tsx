import { FC } from "react";
import styles from "./Postmaker.module.scss";
import textpost from "../../../../assets/textpost.svg";
import photopost from "../../../../assets/photopost.svg";

const Postmaker: FC = () => {
  return (
    <section>
      <form className={styles.container}>
        <input placeholder="Напишите что-нибудь" className={styles.input} />
        <ul className={styles.buttons}>
          <li className={styles.button}>
            <img className={styles.img} src={photopost} />
          </li>
          <li className={styles.button}>
            <img className={styles.img} src={textpost} />
          </li>
        </ul>
      </form>
    </section>
  );
};

export default Postmaker;
