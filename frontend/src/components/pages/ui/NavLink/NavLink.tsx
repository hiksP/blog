import {
  ButtonHTMLAttributes,
  FC,
  LinkHTMLAttributes,
  PropsWithChildren,
} from "react";
import styles from "./Button.module.scss";

interface ILink extends LinkHTMLAttributes<> {}

const Button: FC<PropsWithChildren<IButton>> = ({ children, ...rest }) => {
  const isWorks = window.location.pathname === "/works";
  return (
    <button className={isWorks ? styles.works : styles.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
