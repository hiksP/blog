import styles from './EmptyComments.module.scss'
import { FC } from 'react'

const EmptyComments: FC = () => {
  return <p className={styles.noComments}>No comments yet</p>
}

export default EmptyComments
