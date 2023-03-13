import { FC } from "react";
import styles from "./PostToRead.module.scss";
import dateFormat from "dateformat";
import { IPost } from "../../../../types/post.interface";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PostToRead: FC<{ post: IPost }> = ({ post }) => {
  return (
    <div>
      <a href={`${post._id}`} className={styles.link}>
        {post.title}
      </a>
      <p className={styles.date}>{dateFormat(post.date, "d.mm.yyyy")}</p>
    </div>
  );
};

export default PostToRead;
