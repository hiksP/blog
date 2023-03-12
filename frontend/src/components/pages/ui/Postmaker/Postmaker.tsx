import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./Postmaker.module.scss";
import textpost from "../../../../assets/textpost.svg";
import { PostService } from "../../../../services/PostService";

export type CreatedPost = {
  title: string;
  content: string;
  picture: File;
};

const Postmaker: FC = () => {
  const [picture, setPicture] = useState<File>();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    PostService.createPost({
      title,
      content,
      picture,
    });
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handlePicture = (event: ChangeEvent<HTMLInputElement>) => {
    setPicture(event.target.files[0]);
  };

  return (
    <section>
      <form onSubmit={onSubmit} className={styles.container}>
        <div className={styles.mobContainer}>
          <input
            placeholder="Название поста"
            value={title}
            onChange={changeName}
            className={styles.input}
          />
          <input
            placeholder="Текст поста"
            value={content}
            onChange={changeDescription}
            className={styles.input}
          />
        </div>
        <ul className={styles.buttons}>
          <button className={styles.button}>
            <label htmlFor="photo" className={styles.label} />
            <input
              type={"file"}
              onChange={handlePicture}
              className={styles.photo}
              id="photo"
            ></input>
          </button>
          <button type="submit" className={styles.button}>
            <img className={styles.img} src={textpost} />
          </button>
        </ul>
      </form>
    </section>
  );
};

export default Postmaker;
