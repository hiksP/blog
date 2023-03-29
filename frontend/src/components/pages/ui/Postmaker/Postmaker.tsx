import textpost from '../../../../assets/textpost.svg'
import { PostService } from '../../../../services/PostService'
import styles from './Postmaker.module.scss'
import { ChangeEvent, FC, FormEvent, useState } from 'react'

export type CreatedPost = {
  title: string
  content: string
  picture: File
}

const Postmaker: FC<{ postsRefetch: Function }> = ({ postsRefetch }) => {
  const [picture, setPicture] = useState<File>()
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await PostService.createPost({
      title,
      content,
      picture
    })
    setTitle('')
    setContent('')
    setPicture(undefined)
    postsRefetch()
  }

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const changeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const handlePicture = (
    event: ChangeEvent & {
      target: HTMLInputElement
    }
  ) => {
    const { target } = event
    if (target.files) {
      setPicture(target.files[0])
    }
  }

  return (
    <section>
      <form onSubmit={onSubmit} className={styles.container}>
        <div className={styles.mobContainer}>
          <input
            placeholder='Название поста'
            value={title}
            onChange={changeName}
            className={styles.input}
          />
          <input
            placeholder='Текст поста'
            value={content}
            onChange={changeDescription}
            className={styles.input}
          />
        </div>
        <ul className={styles.buttons}>
          <button className={styles.button}>
            <label htmlFor='photo' className={styles.label} />
            <input
              type={'file'}
              onChange={handlePicture}
              className={styles.photo}
              id='photo'
            ></input>
          </button>
          <button type='submit' className={styles.button}>
            <img className={styles.img} src={textpost} />
          </button>
        </ul>
      </form>
    </section>
  )
}

export default Postmaker
