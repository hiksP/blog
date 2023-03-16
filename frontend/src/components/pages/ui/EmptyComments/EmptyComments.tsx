import { FC } from "react";
import styles from "./EmptyComments.module.scss";

const EmptyComments: FC = () => {
  return <p className={styles.noComments}>No comments yet</p>;
};

export default EmptyComments;
