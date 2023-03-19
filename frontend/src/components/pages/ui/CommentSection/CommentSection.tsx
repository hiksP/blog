import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { CommentService } from "../../../../services/CommentsService";
import { IComment } from "../../../../types/comment.interface";
import Button from "../Button/Button";
import ComemntsList from "../CommentsList/CommentsList";
import Input from "../Input/Input";
import styles from "./CommentSection.module.scss";

const CommentSection: FC = () => {
  const postId = window.location.pathname.match(/\/([^\/]+)\/?$/)[1];
  const {
    data: comments,
    error,
    isLoading,
    refetch,
  } = useQuery(["comments"], () => CommentService.getComments(postId));

  const [commentsOnPage, setCommentsOnPage] = useState<IComment[]>();

  const [comment, setComment] = useState<string>("");

  const commentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await CommentService.postComment(postId, comment);
    refetch();
    setComment("");
  };

  useEffect(() => {
    setCommentsOnPage(comments);
  }, [comments, refetch]);

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
      <ComemntsList
        isLoading={isLoading}
        commentsOnPage={commentsOnPage}
      ></ComemntsList>
    </div>
  );
};

export default CommentSection;
