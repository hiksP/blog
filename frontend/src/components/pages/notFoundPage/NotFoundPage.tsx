import { FC } from "react";
import styles from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>404</h2>
        <p className={styles.text}>Ничего не найдено!</p>
        <Link to="/" className={styles.link}>
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
