import { FC } from "react";
import Button from "../Button/Button";
import Comment from "../Comment/Comment";
import Input from "../Input/Input";
import styles from "./CommentSection.module.scss";

const CommentSection: FC = () => {
  return (
    <div className={styles.discussion}>
      <h3 className={styles.discuss}>Обсуждение</h3>
      <form className={styles.form}>
        <Input placeholder="Напишите комментарий"></Input>
        <Button>Отправить</Button>
      </form>
      <ul className={styles.commentList}>
        <Comment></Comment>
      </ul>
    </div>
  );
};

export default CommentSection;
