import {
  EventHandler,
  FC,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";
import Layout from "../ui/Layout/Layout";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { Context } from "../../../main";
import { observer } from "mobx-react-lite";

const Auth: FC = () => {
  const isLogin = window.location.pathname === "/login";
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { store } = useContext(Context);
  const authFunction = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (isLogin) {
      store.login(email, password);
    } else {
      store.register(email, password, name);
    }
  };

  return (
    <Layout>
      <section className={styles.auth}>
        <h2 className={styles.title}>{isLogin ? "Вход" : "Регистрация"}</h2>
        <form className={styles.form}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
          ></Input>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
            placeholder="Пароль"
          ></Input>
          {!isLogin ? (
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Имя"
            ></Input>
          ) : null}
          <Button onClick={(e) => authFunction(e)} type="submit">
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
