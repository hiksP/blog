import SideBar from '../SideBar/SideBar'
import styles from './BurgerMenu.module.scss'
import { FC, useState } from 'react'

const BurgerMenu: FC = () => {
  const [menuActive, setMenuActive] = useState(false)

  const openMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <nav className={styles.nav}>
      <button
        className={
          !menuActive
            ? styles.button
            : styles.button + ' ' + styles.buttonActive
        }
        onClick={openMenu}
      >
        <span></span>
      </button>
      <div className={styles.box}>
        <input className={styles.input} placeholder='Поиск по блогу'></input>
      </div>
      <div
        className={
          !menuActive ? styles.blur : styles.blur + ' ' + styles.blurActive
        }
      ></div>
      <div
        className={
          !menuActive
            ? styles.content
            : styles.content + ' ' + styles.contentActive
        }
      >
        <SideBar></SideBar>
      </div>
    </nav>
  )
}

export default BurgerMenu
