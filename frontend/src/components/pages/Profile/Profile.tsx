import { FC, useContext, useState } from "react";
import Button from "../ui/Button/Button";
import Layout from "../ui/Layout/Layout";
import styles from "./Profile.module.scss";
import { Context } from "../../../main";
import { useForm } from "react-hook-form";
import Authinput, { FormValues } from "../ui/Input/Authinput";
import AvatarPopup from "../ui/AvatarPopoup/AvatarPopup";
import AuthError from "../ui/Error/AuthError";
import { observer } from "mobx-react-lite";

const Profile: FC = () => {
  const { store } = useContext(Context);

  const { handleSubmit, formState, control } = useForm<FormValues>({
    defaultValues: {
      Email: `${localStorage.getItem("Email")}`,
      Password: "",
      Name: `${localStorage.getItem("userName")}`,
      Confirm: "",
    },
    mode: "onChange",
  });

  const [isPopupOpened, setPopupOpened] = useState(false);

  const openPopup = () => {
    setPopupOpened(true);
  };

  const closePopup = () => {
    setPopupOpened(false);
  };

  const onSubmit = (data: FormValues) => {
    store.patchUser(data.Email, data.Name);
  };

  return (
    <Layout>
      <section className={styles.profile}>
        <h2 className={styles.title}>Профиль</h2>
        <div className={styles.container}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Authinput
              control={control}
              name="Name"
              rules={{
                required: "Вы пропустили имя",
                minLength: {
                  value: 3,
                  message: "Минимальная длина данного поля - 3",
                },
              }}
            ></Authinput>
            {formState.errors.Name && (
              <AuthError>{formState.errors.Name.message}</AuthError>
            )}
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
            <Authinput control={control} name="Password"></Authinput>
            <Authinput control={control} name="Confirm"></Authinput>
            <Button disabled={!formState.isValid} type="submit">
              Сохранить
            </Button>
          </form>
          <div className={styles.avatar}>
            <img className={styles.image} src={store.user.avatar}></img>
            <p className={styles.choose} onClick={openPopup}>
              Выбрать аватар
            </p>
          </div>
        </div>
      </section>
      <AvatarPopup isOpen={isPopupOpened} onClose={closePopup}></AvatarPopup>
    </Layout>
  );
};

export default observer(Profile);
