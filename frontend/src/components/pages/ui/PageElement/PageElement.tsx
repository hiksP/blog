import { FC } from "react";
import styles from "./PageElement.module.scss";

const PageElement: FC<{ number: number; handlePage: Function }> = ({
  number,
  handlePage,
}) => {
  return (
    <li onClick={(e) => handlePage(e)} className={styles.page}>
      {number.toString()}
    </li>
  );
};

export default PageElement;
