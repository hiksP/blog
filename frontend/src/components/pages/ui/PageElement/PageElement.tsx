import { FC } from "react";
import styles from "./PageElement.module.scss";

const PageElement: FC<{
  number: number;
  handlePage: Function;
  currentPage: number;
}> = ({ number, handlePage, currentPage }) => {
  const isCurrentPage = currentPage === number;
  return (
    <li
      onClick={(e) => handlePage(e)}
      className={
        isCurrentPage ? styles.page + " " + styles.currentPage : styles.page
      }
    >
      {number.toString()}
    </li>
  );
};

export default PageElement;
