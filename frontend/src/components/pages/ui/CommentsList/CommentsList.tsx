import { FC } from "react";
import { IComment } from "../../../../types/comment.interface";
import Comment from "../Comment/Comment";
import EmptyComments from "../EmptyComments/EmptyComments";
import Loader from "../Loader/Loader";
import styles from "./CommentsList.module.scss";

const ComemntsList: FC<{ isLoading: boolean; commentsOnPage?: IComment[] }> = ({
  isLoading,
  commentsOnPage,
}) => {
  return (
    <ul className={styles.commentList}>
      {isLoading ? (
        <Loader></Loader>
      ) : commentsOnPage?.length ? (
        commentsOnPage.map((coment: IComment) => (
          <Comment comment={coment} key={coment.id}></Comment>
        ))
      ) : (
        <EmptyComments></EmptyComments>
      )}
    </ul>
  );
};

export default ComemntsList;
