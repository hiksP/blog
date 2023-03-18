import { FC, useEffect, useState } from "react";
import Layout from "../ui/Layout/Layout";
import styles from "./Article.module.scss";
import ColumnToRead from "../ui/ColumnToRead/ColumnToRead";
import CommentSection from "../ui/CommentSection/CommentSection";
import { useQuery } from "@tanstack/react-query";
import { PostService } from "../../../services/PostService";
import dateFormat from "dateformat";
import Loader from "../ui/Loader/Loader";
import $api from "../../../http";
import { IPost } from "../../../types/post.interface";

const Article: FC<{ posts?: IPost[]; handleSearch: Function }> = ({
  posts,
  handleSearch,
}) => {
  // получение поста на странице
  const {
    data: post,
    error,
    isLoading,
  } = useQuery(["post"], () =>
    PostService.getPost(window.location.pathname.match(/\/([^\/]+)\/?$/)[1])
  );

  // случайные посты для колонки
  const [randomPosts, setRandomPosts] = useState<IPost[]>();

  // логика получения случаныйх постов
  useEffect(() => {
    const postsWithoutArticle = posts?.filter(
      (article) => article._id !== post?._id
    );
    const shuffled = postsWithoutArticle?.sort(() => 0.5 - Math.random());
    setRandomPosts(shuffled?.slice(0, 4));
  }, [posts]);

  // шейр кнопка
  useEffect(() => {
    if (!isLoading) {
      const script = document.createElement("script");

      script.src = "https://yastatic.net/share2/share.js";
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isLoading, post]);

  return (
    <Layout handleSearch={handleSearch}>
      {isLoading ? (
        <section className={`${styles.article} ${styles.loading}`}>
          <Loader></Loader>
        </section>
      ) : (
        <section className={styles.article}>
          <div className={styles.container}>
            <div className={styles.buttons}>
              <div
                className={`ya-share2 ${styles.share}`}
                data-curtain
                data-shape="round"
                data-limit="0"
                data-more-button-type="short"
                data-services="vkontakte,telegram,whatsapp,linkedin"
              ></div>
              <p className={styles.topText}>поделиться</p>
            </div>
            <h2 className={styles.title}>{post?.title}</h2>
            <p className={styles.date}>{dateFormat(post?.date, "d.mm.yyyy")}</p>
            <img
              src={`${$api.defaults.baseURL}/${post?.picture}`}
              className={styles.image}
            ></img>
            <p className={styles.text}>{post?.content}</p>
          </div>
          <ColumnToRead randomPosts={randomPosts}></ColumnToRead>
          <CommentSection></CommentSection>
        </section>
      )}
    </Layout>
  );
};

export default Article;
