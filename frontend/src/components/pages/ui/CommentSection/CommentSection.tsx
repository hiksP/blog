import { useQuery } from "@tanstack/react-query";
import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../../../main";
import { CommentService } from "../../../../services/CommentsService";
import { IComment } from "../../../../types/comment.interface";
import Button from "../Button/Button";
import Comment from "../Comment/Comment";
import EmptyComments from "../EmptyComments/EmptyComments";
import Input from "../Input/Input";
import Loader from "../Loader/Loader";
import styles from "./CommentSection.module.scss";

const CommentSection: FC = () => {
  const postId = window.location.pathname.match(/\/([^\/]+)\/?$/)[1];
  const {
    data: comments,
    error,
    isLoading,
  } = useQuery(["comments"], () => CommentService.getComments(postId));

  const [comment, setComment] = useState<string>("");

  const commentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    CommentService.postComment(postId, comment);
  };

  return (
    <div className={styles.discussion}>
      <h3 className={styles.discuss}>Обсуждение</h3>
      <form
        onSubmit={(e) => {
          commentHandler(e);
        }}
        className={styles.form}
      >
        <Input
          placeholder="Напишите комментарий"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></Input>
        <Button>Отправить</Button>
      </form>
      <ul className={styles.commentList}>
        {isLoading ? (
          <Loader></Loader>
        ) : comments?.length ? (
          comments.map((coment: IComment) => (
            <Comment comment={coment} key={coment.id}></Comment>
          ))
        ) : (
          <EmptyComments></EmptyComments>
        )}
      </ul>
    </div>
  );
};

export default CommentSection;
