import { FC } from "react";
import styles from "./ColumnToRead.module.scss";

const ColumnToRead: FC = () => {
  return (
    <>
      <h3 className={styles.otherArticles}>Интересно почитать</h3>
      <div className={styles.links}>
        <div className={styles.col}>
          <div>
            <a className={styles.link}>Как я сходил на FrontEnd Conf 2021</a>
            <p className={styles.date}>21.06.2020</p>
          </div>
          <div>
            <a className={styles.link}>Купил новый ноутбук за 150 000 руб</a>
            <p className={styles.date}>21.06.2020</p>
          </div>
        </div>
        <div className={styles.col}>
          <div>
            <a className={styles.link}>Как я сходил на FrontEnd Conf 2021</a>
            <p className={styles.date}>21.06.2020</p>
          </div>
          <div>
            <a className={styles.link}>Купил новый ноутбук за 150 000 руб</a>
            <p className={styles.date}>21.06.2020</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColumnToRead;
