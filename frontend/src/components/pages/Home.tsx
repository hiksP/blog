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
import Loader from "./ui/Loader/Loader";

const Home: FC = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery(["posts"], () => PostService.getPosts());

  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <div id={"layout"} className={styles.layout}>
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
      </div>
    </>
  );
};

export default Home;
