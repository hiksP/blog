import { Context } from '../../../../main'
import styles from './Navigation.module.scss'
import { observer } from 'mobx-react-lite'
import { FC, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navigation: FC<{ handleSearch: Function }> = ({ handleSearch }) => {
  const { store } = useContext(Context)
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.clear()
    store.logout()
    window.location.reload()
  }

  const [input, setInput] = useState<string>(
    localStorage.getItem('input') || ''
  )

  useEffect(() => {
    localStorage.setItem('input', input)
  }, [input])

  const inputHandler = (e: any) => {
    setInput(e.target.value)
  }

  if (window.location.pathname === '/') {
    useEffect(() => {
      handleSearch(input)
    }, [input])
  }

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    return navigate('/')
  }

  if (!store.isAuth) {
    return (
      <nav className={styles.nav}>
        <ul className={styles.firstUl}>
          <Link to='/blog'>
            <li className={styles.el}>Главная</li>
          </Link>
          <Link to={'/blog/login'}>
            <li className={styles.el}>Войти</li>
          </Link>
        </ul>
        <ul className={styles.secondUl}>
          <Link to='/blog/profile'>
            <li className={styles.el}>Профиль</li>
          </Link>
          <form
            onSubmit={e => {
              searchSubmit(e)
            }}
            className={styles.box}
          >
            <input
              className={styles.input}
              type={'search'}
              placeholder='Поиск по блогу'
              value={input}
              onChange={e => {
                inputHandler(e)
              }}
            ></input>
          </form>
        </ul>
      </nav>
    )
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.firstUl}>
        <Link to='/blog'>
          <li className={styles.el}>Главная</li>
        </Link>
        <li className={styles.el} onClick={() => logoutHandler()}>
          Выйти
        </li>
      </ul>
      <ul className={styles.secondUl}>
        <Link to='/blog/profile'>
          <li className={styles.el}>Профиль</li>
        </Link>
        <form onSubmit={searchSubmit} className={styles.box}>
          <input
            className={styles.input}
            type={'search'}
            value={input}
            onChange={e => {
              inputHandler(e)
            }}
            placeholder='Поиск по блогу'
          ></input>
        </form>
      </ul>
    </nav>
  )
}

export default observer(Navigation)
