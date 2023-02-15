import { FC } from "react";
import styles from "./Post.module.scss";
import post from "../../../../assets/post.jpg";

const Post: FC = () => {
  return (
    <article className={styles.article}>
      <img className={styles.image} src={post}></img>
      <div className={styles.text}>
        <h2 className={styles.title}>Как писать код быстро и безболезненно?</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.
          Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce
          arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat
          massa. Egestas ornare vel volutpat.
        </p>
      </div>
      <div className={styles.info}>
        <p className={styles.date}>21.06.2020</p>
        <a className={styles.link}>Читать</a>
      </div>
    </article>
  );
};

export default Post;
