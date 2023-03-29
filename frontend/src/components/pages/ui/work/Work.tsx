import work from '../../../../assets/work.svg'
import Button from '../Button/Button'
import styles from './Work.module.scss'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Work: FC = () => {
  return (
    <article className={styles.article}>
      <img src={work} className={styles.image}></img>
      <div className={styles.container}>
        <h3 className={styles.title}>altermono.com</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.
          Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce
          arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat
          massa. Egestas ornare vel volutpat.
        </p>
        <div className={styles.tags}>
          <p className={styles.tag}>дизайн</p>
          <p className={styles.tag}>создание сайта</p>
          <p className={styles.tag}>SMM</p>
        </div>
        <Link className={styles.link} to=''>
          <Button>Перейти на сайт</Button>
        </Link>
      </div>
    </article>
  )
}

export default Work
