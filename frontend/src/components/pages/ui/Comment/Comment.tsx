import { FC } from "react";
import styles from "./Comment.module.scss";
import { IComment } from "../../../../types/comment.interface";
import dateFormat from "dateformat";

const Comment: FC<{ comment: IComment }> = ({ comment }) => {
  return (
    <li className={styles.comment}>
      <div className={styles.upperContainer}>
        <img src={comment.authorAvatar} className={styles.avatar}></img>
        <div className={styles.info}>
          <p className={styles.name}>{comment.authorName}</p>
          <p className={styles.date}>
            {dateFormat(comment?.date, "d.mm.yyyy")}
          </p>
        </div>
      </div>
      <p className={styles.text}>{comment.text}</p>
      <button className={styles.reply}>Ответить</button>
    </li>
  );
};

export default Comment;
