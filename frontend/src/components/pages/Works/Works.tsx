import Layout from '../ui/Layout/Layout'
import Work from '../ui/work/Work'
import styles from './Works.module.scss'
import { FC } from 'react'

const Works: FC<{ handleSearch: Function }> = ({ handleSearch }) => {
  return (
    <Layout handleSearch={handleSearch}>
      <section className={styles.works}>
        <h2 className={styles.title}>Мои работы</h2>
        <ul className={styles.list}>
          <Work></Work>
        </ul>
      </section>
    </Layout>
  )
}

export default Works
