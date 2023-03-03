import { FC } from "react";
import styles from "./Post.module.scss";
import dateFormat, { masks } from "dateformat";
import { IPost } from "../../../../types/post.interface";
import { Link } from "react-router-dom";

const Post: FC<{ post: IPost }> = ({ post }) => {
  function hideDescription(text: string, count: number) {
    return text.slice(0, count) + (text.length > count ? "..." : "");
  }

  return (
    <article className={styles.article}>
      <img
        className={styles.image}
        src={`http://localhost:5000/${post.picture}`}
      ></img>
      <div className={styles.text}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.description}>
          {hideDescription(post.content, 250)}
        </p>
      </div>
      <div className={styles.info}>
        <p className={styles.date}>{dateFormat(post.date, "d.mm.yyyy")}</p>
        <Link to={`id/${post._id}`} className={styles.link}>
          Читать
        </Link>
      </div>
    </article>
  );
};

export default Post;
