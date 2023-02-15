import { FC } from "react";
import styles from "./Navigation.module.scss";

const Navigation: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.firstUl}>
        <li className={styles.el}>Главная</li>
        <li className={styles.el}>Статьи</li>
        <li className={styles.el}>Обо мне</li>
      </ul>
      <ul className={styles.secondUl}>
        <li className={styles.el}>Профиль</li>
        <div className={styles.box}>
          <input className={styles.input} placeholder="Поиск по блогу"></input>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
