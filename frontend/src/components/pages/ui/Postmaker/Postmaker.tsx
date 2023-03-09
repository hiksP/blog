import { FC } from "react";
import styles from "./Postmaker.module.scss";
import textpost from "../../../../assets/textpost.svg";
import { useForm } from "react-hook-form";
import { PostService } from "../../../../services/PostService";

export type CreatedPost = {
  title: string;
  content: string;
  picture: File;
  date: Date;
};

const Postmaker: FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<CreatedPost>({
    defaultValues: {
      title: "",
      content: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: CreatedPost) => {
    PostService.createPost(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        <input
          {...register("title")}
          placeholder="Название поста"
          className={styles.input}
        />
        <input
          {...register("content")}
          placeholder="Текст поста"
          className={styles.input}
        />
        <ul className={styles.buttons}>
          <button className={styles.button}>
            <label htmlFor="photo" className={styles.label} />
            <input
              {...register("picture")}
              type={"file"}
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
