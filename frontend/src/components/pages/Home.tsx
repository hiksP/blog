import { FC, useEffect, useState } from "react";
import { PostService } from "../../services/PostService";
import { IPost } from "../../types/post.interface";
import Header from "./header/Header";
import styles from "./Home.module.scss";
import Post from "./ui/Post/Post";
import Postmaker from "./ui/Postmaker/Postmaker";
import SideBar from "./ui/SideBar/SideBar";
import Stories from "./ui/Stories/Stories";
import { useQuery } from "@tanstack/react-query";

const Home: FC = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery(["posts"], () => PostService.getPosts());

  console.log(posts);

  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <div className={styles.layout}>
        <Postmaker></Postmaker>
        <ul className={styles.list}>
          <Post></Post>
        </ul>
      </div>
    </>
  );
};

export default Home;
