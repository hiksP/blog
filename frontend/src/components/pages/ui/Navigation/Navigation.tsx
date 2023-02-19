import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.firstUl}>
        <Link to="/">
          <li className={styles.el}>Главная</li>
        </Link>
        <Link to="/login">
          <li className={styles.el}>Войти</li>
        </Link>
      </ul>
      <ul className={styles.secondUl}>
        <Link to="/profile">
          <li className={styles.el}>Профиль</li>
        </Link>
        <div className={styles.box}>
          <input className={styles.input} placeholder="Поиск по блогу"></input>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
