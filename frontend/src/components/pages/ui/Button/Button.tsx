import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IButton>> = ({ children, ...rest }) => {
  const isWorks = window.location.pathname === '/blog/works'
  return (
    <button className={isWorks ? styles.works : styles.button} {...rest}>
      {children}
    </button>
  )
}

export default Button
