import PageElement from '../PageElement/PageElement'
import styles from './PageSelection.module.scss'
import { FC, useEffect, useState } from 'react'

interface IPageSelection {
  pages: number[]
  handlePage: Function
  handleForward: Function
  handleBack: Function
  currentPage: number
  isSearching: boolean
}

const PageSelection: FC<IPageSelection> = ({
  pages,
  handlePage,
  handleForward,
  handleBack,
  currentPage,
  isSearching
}) => {
  const [firstPage, setFirstPage] = useState(pages[0])
  const [lastPage, setLastPage] = useState(pages.slice(-1)[0])
  const [nextPage, setNextPage] = useState(currentPage + 1)

  const isCurrentPageFirst = currentPage === firstPage
  const isCurrentPageLast = currentPage === lastPage
  const [isPagesTooMuch, setPagesTooMuch] = useState<boolean>(false)
  const [pagesMuch, setPagesMuch] = useState<number[]>([])

  useEffect(() => {
    setNextPage(currentPage + 1)
    if (pages.length > 3) {
      setPagesTooMuch(true)
      if (nextPage >= lastPage) {
        setPagesMuch([currentPage - 1, currentPage, lastPage])
      } else {
        setPagesMuch([currentPage, nextPage, lastPage])
      }
      if (currentPage === lastPage) {
        setPagesMuch([firstPage, currentPage - 1, currentPage])
      }
    }
  }, [pages, currentPage])

  return (
    <div className={styles.container}>
      <button
        disabled={isCurrentPageFirst}
        onClick={() => {
          handleBack()
        }}
        className={isSearching ? styles.noButton : styles.button}
      >
        &lt;
      </button>
      {!isSearching ? (
        <ul className={styles.list}>
          {!isPagesTooMuch
            ? pages.map((page, index) => (
                <PageElement
                  handlePage={handlePage}
                  key={index}
                  number={page}
                  currentPage={currentPage}
                  isPagesTooMuch={isPagesTooMuch}
                  nextPage={nextPage}
                  lastPage={lastPage}
                ></PageElement>
              ))
            : pagesMuch.map((page, index) => (
                <PageElement
                  handlePage={handlePage}
                  key={index}
                  number={page}
                  currentPage={currentPage}
                  isPagesTooMuch={isPagesTooMuch}
                  nextPage={nextPage}
                  lastPage={lastPage}
                ></PageElement>
              ))}
        </ul>
      ) : null}
      <button
        disabled={isCurrentPageLast}
        onClick={() => {
          handleForward()
        }}
        className={isSearching ? styles.noButton : styles.button}
      >
        &gt;
      </button>
    </div>
  )
}

export default PageSelection
