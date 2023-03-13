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
import PageSelection from "./ui/PageSelection/PageSelection";

const Home: FC = () => {
  const { store } = useContext(Context);

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery(["posts"], () => PostService.getPosts());

  const [postsOnPage, setPostsOnPage] = useState<IPost[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number[]>([]);
  const postsPerPage = 3;
  const pagesArr: number[] = [];

  useEffect(() => {
    setPostsOnPage(posts);
    if (postsOnPage) {
      for (let i = 1; i <= Math.ceil(postsOnPage?.length / postsPerPage); i++) {
        pagesArr.push(i);
        setPages(pagesArr);
      }
    }
  }, [posts, postsOnPage]);

  const handlePage = (event: any) => {
    setCurrentPage(Number(event.target.innerHTML));
  };

  const handleForward = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsOnPage?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Layout>
      <Postmaker></Postmaker>
      <ul className={styles.list}>
        {isLoading ? (
          <Loader></Loader>
        ) : currentPosts?.length ? (
          currentPosts.map((post) => <Post post={post} key={post._id}></Post>)
        ) : (
          <div>No posts</div>
        )}
      </ul>
      <PageSelection
        pages={pages}
        handlePage={handlePage}
        handleForward={handleForward}
        handleBack={handleBack}
        currentPage={currentPage}
      ></PageSelection>
    </Layout>
  );
};

export default observer(Home);
