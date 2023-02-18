import { FC } from "react";
import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";
import Layout from "../ui/Layout/Layout";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";

const Auth: FC = () => {
  const isLogin = window.location.pathname === "/login";

  return (
    <Layout>
      <section className={styles.auth}>
        <h2 className={styles.title}>{isLogin ? "Вход" : "Регистрация"}</h2>
        <form className={styles.form}>
          <Input placeholder="Email"></Input>
          <Input placeholder="Пароль"></Input>
          <Button type="submit">
            {isLogin ? "Войти" : "Зарегестрироваться"}
          </Button>
        </form>
        <Link to={isLogin ? "/register" : "/login"} className={styles.link}>
          {isLogin ? "Еще не зарегестрированы?" : "Уже зарегестрированы?"}
        </Link>
      </section>
    </Layout>
  );
};

export default Auth;
