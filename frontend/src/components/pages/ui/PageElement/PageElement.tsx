import { FC, useState } from "react";
import styles from "./PageElement.module.scss";

const PageElement: FC<{
  number: number;
  handlePage: Function;
  currentPage: number;
  isPagesTooMuch: boolean;
  nextPage: number;
  lastPage: number;
}> = ({
  number,
  handlePage,
  currentPage,
  isPagesTooMuch,
  nextPage,
  lastPage,
}) => {
  const isCurrentPage = currentPage === number;
  const isNextPage = number === nextPage;
  const isNextPageLast = number === lastPage;
  return isPagesTooMuch ? (
    <>
      <li
        onClick={(e) => handlePage(e)}
        className={
          isCurrentPage ? styles.page + " " + styles.currentPage : styles.page
        }
      >
        {number.toString()}
      </li>
      <p
        className={isNextPage && !isNextPageLast ? styles.dots : styles.noDots}
      >
        ...
      </p>
    </>
  ) : (
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
