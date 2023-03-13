import { FC } from "react";
import PageElement from "../PageElement/PageElement";
import styles from "./PageSelection.module.scss";

const PageSelection: FC<{
  pages: number[];
  handlePage: Function;
  handleForward: Function;
  handleBack: Function;
  currentPage: number;
}> = ({ pages, handlePage, handleForward, handleBack, currentPage }) => {
  const isCurrentPageFirst = currentPage === pages[0];
  const isCurrentPageLast = currentPage === pages.slice(-1)[0];
  return (
    <div className={styles.container}>
      <button
        disabled={isCurrentPageFirst}
        onClick={() => {
          handleBack();
        }}
        className={styles.button}
      >
        &lt;
      </button>
      <ul className={styles.list}>
        {pages.map((page) => (
          <PageElement
            handlePage={handlePage}
            key={page}
            number={page}
          ></PageElement>
        ))}
      </ul>
      <button
        disabled={isCurrentPageLast}
        onClick={() => {
          handleForward();
        }}
        className={styles.button}
      >
        &gt;
      </button>
    </div>
  );
};

export default PageSelection;
