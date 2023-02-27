import { FC, useContext, useEffect, useState } from "react";
import { PostService } from "../../services/PostService";
import { IPost } from "../../types/post.interface";
import Header from "./header/Header";
import styles from "./Home.module.scss";
import Post from "./ui/Post/Post";
import Postmaker from "./ui/Postmaker/Postmaker";
import SideBar from "./ui/SideBar/SideBar";
import Stories from "./ui/Stories/Stories";
import { useQuery } from "@tanstack/react-query";
import Loader from "./ui/Loader/Loader";
import Layout from "./ui/Layout/Layout";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

const Home: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery(["posts"], () => PostService.getPosts());

  return (
    <Layout>
      <Postmaker></Postmaker>
      <ul className={styles.list}>
        {isLoading ? (
          <Loader></Loader>
        ) : posts?.length ? (
          posts.map((post) => <Post post={post} key={post._id}></Post>)
        ) : (
          <div>No posts</div>
        )}
      </ul>
    </Layout>
  );
};

export default observer(Home);
