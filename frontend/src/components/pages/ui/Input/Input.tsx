import styles from "./Input.module.scss";
import { FC, InputHTMLAttributes, forwardRef } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IInput> = ({ ...rest }) => {
  return <input className={styles.input} {...rest}></input>;
};

export default Input;
