import { IComment } from '../../../../types/comment.interface'
import Comment from '../Comment/Comment'
import EmptyComments from '../EmptyComments/EmptyComments'
import Loader from '../Loader/Loader'
import styles from './CommentsList.module.scss'
import { FC } from 'react'

interface ICommentsList {
  isLoading: boolean;
  commentsOnPage?: IComment[] 
}

const ComemntsList: FC<ICommentsList> = ({
  isLoading,
  commentsOnPage
}) => {
  return (
    <ul className={styles.commentList}>
      {isLoading ? (
        <Loader></Loader>
      ) : commentsOnPage?.length ? (
        commentsOnPage.map((coment: IComment) => (
          <Comment comment={coment} key={coment.id}></Comment>
        ))
      ) : (
        <EmptyComments></EmptyComments>
      )}
    </ul>
  )
}

export default ComemntsList
