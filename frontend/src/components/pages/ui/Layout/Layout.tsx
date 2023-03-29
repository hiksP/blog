import Header from '../../header/Header'
import SideBar from '../SideBar/SideBar'
import styles from './Layout.module.scss'
import { FC, ReactNode, useState } from 'react'

interface ILayout {
  children?: ReactNode;
  handleSearch: Function
}

const Layout: FC<ILayout> = ({
  children,
  handleSearch
}) => {
  const [width, SetWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setTimeout(() => {
      const windowInnerWidth = window.innerWidth
      SetWidth(windowInnerWidth)
    }, 1000)
  })

  return width > 680 ? (
    <>
      <SideBar></SideBar>
      <Header handleSearch={handleSearch}></Header>
      <div className={styles.layout}>{children}</div>
    </>
  ) : (
    <>
      <Header handleSearch={handleSearch}></Header>
      <div className={styles.layout}>{children}</div>
    </>
  )
}

export default Layout
