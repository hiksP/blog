import { FC } from "react";
import styles from "./NoPosts.module.scss";

const NoPosts: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>No such posts</h2>
      <p className={styles.description}>
        Do you want to search for something else?
      </p>
    </div>
  );
};

export default NoPosts;
