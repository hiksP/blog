import { FC } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Layout from "../ui/Layout/Layout";
import styles from "./Profile.module.scss";
import avatar from "../../../assets/avatar.jpg";

const Profile: FC = () => {
  return (
    <Layout>
      <section className={styles.profile}>
        <h2 className={styles.title}>Профиль</h2>
        <div className={styles.container}>
          <form className={styles.form}>
            <Input></Input>
            <Input></Input>
            <Input placeholder="Новый пароль"></Input>
            <Input placeholder="Подтвердите пароль"></Input>
            <Button>Сохранить</Button>
          </form>
          <div className={styles.avatar}>
            <img className={styles.image} src={avatar}></img>
            <p className={styles.choose}>Выбрать аватар</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
