import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../../main";
import styles from "./Navigation.module.scss";

const Navigation: FC = () => {
  const { store } = useContext(Context);

  const logoutHandler = () => {
    if (store.isAuth) {
      store.logout();
    }
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.firstUl}>
        <Link to="/">
          <li className={styles.el}>Главная</li>
        </Link>
        <Link to={store.isAuth ? "/" : "/login"} onClick={logoutHandler}>
          <li className={styles.el}>{store.isAuth ? "Выйти" : "Войти"}</li>
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
