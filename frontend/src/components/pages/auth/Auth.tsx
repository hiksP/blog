import { FC } from "react";
import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";
import Layout from "../ui/Layout/Layout";

const Auth: FC = () => {
  const isLogin = window.location.pathname === "/login";

  return (
    <Layout>
      <section className={styles.auth}>
        <h2 className={styles.title}>{isLogin ? "Вход" : "Регистрация"}</h2>
        <form className={styles.form}>
          <input className={styles.input} placeholder="Email"></input>
          <input className={styles.input} placeholder="Пароль"></input>
          <button type="submit" className={styles.button}>
            {isLogin ? "Войти" : "Зарегестрироваться"}
          </button>
        </form>
        <Link to={isLogin ? "/register" : "/login"} className={styles.link}>
          {isLogin ? "Еще не зарегестрированы?" : "Уже зарегестрированы?"}
        </Link>
      </section>
    </Layout>
  );
};

export default Auth;
