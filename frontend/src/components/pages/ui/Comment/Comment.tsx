import { FC } from "react";
import styles from "./Comment.module.scss";
import comment from "../../../../assets/comment.svg";

const Comment: FC = () => {
  return (
    <li className={styles.comment}>
      <div className={styles.upperContainer}>
        <img src={comment} className={styles.avatar}></img>
        <div className={styles.info}>
          <p className={styles.name}>Дмитрий Валак</p>
          <p className={styles.date}>1 неделю назад</p>
        </div>
      </div>
      <p className={styles.text}>
        Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci
        auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu
        auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel
        volutpat.
      </p>
      <button className={styles.reply}>Ответить</button>
    </li>
  );
};

export default Comment;
