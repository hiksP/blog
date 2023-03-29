import { IPost } from '../../../../types/post.interface'
import PostToRead from '../PostToRead/PostToRead'
import styles from './ColumnToRead.module.scss'
import { FC, useEffect, useState } from 'react'

const ColumnToRead: FC<{ randomPosts?: IPost[] }> = ({ randomPosts }) => {
  const [firstPosts, setFirstPosts] = useState<IPost[]>()
  const [secondPosts, setSecondPosts] = useState<IPost[]>()

  useEffect(() => {
    setFirstPosts(randomPosts?.slice(0, 2))
    setSecondPosts(randomPosts?.slice(2, 4))
  }, [randomPosts])

  return (
    <>
      <h3 className={styles.otherArticles}>Интересно почитать</h3>
      <div className={styles.links}>
        <div className={styles.col}>
          {firstPosts?.map(post => (
            <PostToRead key={post._id} post={post}></PostToRead>
          ))}
        </div>
        <div className={styles.col}>
          {secondPosts?.map(post => (
            <PostToRead key={post._id} post={post}></PostToRead>
          ))}
        </div>
      </div>
    </>
  )
}

export default ColumnToRead
