import styles from './AuthError.module.scss'
import { FC, PropsWithChildren } from 'react'

const AuthError: FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.error}>{children}</p>
}

export default AuthError
