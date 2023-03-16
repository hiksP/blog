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
import { SubmitHandler, useForm } from "react-hook-form";
import { ISign } from "../../../types/sign.interface";
import Authinput, { FormValues } from "../ui/Input/Authinput";
import AuthError from "../ui/Error/AuthError";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../types/post.interface";

type FuncProps = {
  loginFunc: (values: void) => void;
  handleSearch: (values: string) => void;
};

const Auth: FC<FuncProps> = (props: FuncProps) => {
  const isLogin = window.location.pathname === "/login";
  const { handleSubmit, formState, control } = useForm<FormValues>({
    defaultValues: {
      Email: "",
      Password: "",
      Name: "",
    },
    mode: "onChange",
  });

  const navigate = useNavigate();

  const { store } = useContext(Context);
  const onSubmit = async (data: FormValues) => {
    if (isLogin) {
      await store.login(data.Email, data.Password, navigate);
      store.isAuth ? props.loginFunc() : null;
    } else {
      await store.register(data.Email, data.Password, data.Name, navigate);
    }
  };

  return (
    <Layout handleSearch={props.handleSearch}>
      <section className={styles.auth}>
        <h2 className={styles.title}>{isLogin ? "Вход" : "Регистрация"}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Authinput
            control={control}
            name="Email"
            rules={{
              required: "Вы пропустили Email",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Введите верный Email",
              },
            }}
          ></Authinput>
          {formState.errors.Email && (
            <AuthError>{formState.errors.Email.message}</AuthError>
          )}
          <Authinput
            control={control}
            name="Password"
            rules={{
              required: "Вы пропустили пароль",
              minLength: {
                value: 3,
                message: "Минимальная длина пароля - 3",
              },
              maxLength: {
                value: 32,
                message: "Максимальная длина пароля - 32",
              },
            }}
          ></Authinput>
          {formState.errors.Password && (
            <AuthError>{formState.errors.Password.message}</AuthError>
          )}
          {!isLogin ? (
            <Authinput
              control={control}
              name="Name"
              rules={{ required: "Вы пропустили имя" }}
            ></Authinput>
          ) : null}
          {formState.errors.Name && (
            <AuthError>{formState.errors.Name.message}</AuthError>
          )}
          <Button disabled={!formState.isValid} type="submit">
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
