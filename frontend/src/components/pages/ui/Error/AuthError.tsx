import { FC, PropsWithChildren } from "react";
import styles from "./AuthError.module.scss";

const AuthError: FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.error}>{children}</p>;
};

export default AuthError;
