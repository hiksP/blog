import { FC, useEffect } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Layout from "../ui/Layout/Layout";
import styles from "./Article.module.scss";
import image from "../../../assets/image.svg";
import ColumnToRead from "../ui/ColumnToRead/ColumnToRead";
import CommentSection from "../ui/CommentSection/CommentSection";
import { useQuery } from "@tanstack/react-query";
import { PostService } from "../../../services/PostService";
import dateFormat from "dateformat";
import axios from "axios";
import Loader from "../ui/Loader/Loader";
import $api from "../../../http";
import { IPost } from "../../../types/post.interface";

const Article: FC<{ posts?: IPost[] }> = ({ posts }) => {
  const {
    data: post,
    error,
    isLoading,
  } = useQuery(["post"], () =>
    PostService.getPost(window.location.pathname.match(/\/([^\/]+)\/?$/)[1])
  );

  const postsWithoutArticle = posts?.filter(
    (article) => article._id !== post?._id
  );
  const shuffled = postsWithoutArticle?.sort(() => 0.5 - Math.random());
  let randomPosts = shuffled?.slice(0, 4);

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
  }, [isLoading]);

  return (
    <Layout>
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
