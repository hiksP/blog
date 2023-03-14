import { FC, useEffect, useState } from "react";
import { IPost } from "../../types/post.interface";
import styles from "./Home.module.scss";
import Post from "./ui/Post/Post";
import Postmaker from "./ui/Postmaker/Postmaker";
import Loader from "./ui/Loader/Loader";
import Layout from "./ui/Layout/Layout";
import { observer } from "mobx-react-lite";
import PageSelection from "./ui/PageSelection/PageSelection";

const Home: FC<{
  posts?: IPost[];
  isLoading: boolean;
  handleSearch: Function;
  foundPosts?: IPost[];
}> = ({ posts, isLoading, handleSearch, foundPosts }) => {
  // все посты
  const [postsOnPage, setPostsOnPage] = useState<IPost[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [isSearching, setIsSearching] = useState<boolean>(false);

  //посты которые отображаются

  const [currentPosts, setCurrentPosts] = useState<IPost[]>();
  const [pages, setPages] = useState<number[]>([]);
  const postsPerPage = 3;

  // отображение постов и количества страниц на странице
  useEffect(() => {
    setIsSearching(false);
    setPostsOnPage(posts);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCurrentPosts(postsOnPage?.slice(indexOfFirstPost, indexOfLastPost));
    if (foundPosts?.length < postsOnPage?.length) {
      setIsSearching(true);
      setCurrentPosts(foundPosts?.slice(indexOfFirstPost, indexOfLastPost));
    }
  }, [posts, postsOnPage, currentPage, foundPosts]);

  const handlePage = (event: any) => {
    setCurrentPage(Number(event.target.innerHTML));
  };

  const handleForward = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (postsOnPage) {
      const pagesArr: number[] = [];
      for (let i = 1; i <= Math.ceil(postsOnPage.length / postsPerPage); i++) {
        pagesArr.push(i);
        setPages(pagesArr);
      }
    }

    if (isSearching && currentPosts) {
      const pagesArr: number[] = [];
      for (let i = 1; i <= Math.ceil(currentPosts.length / postsPerPage); i++) {
        pagesArr.push(i);
        setPages(pagesArr);
      }
    }
  }, [postsOnPage, currentPosts, foundPosts]);

  useEffect(() => {
    console.log(currentPosts);
  }, [currentPosts]);

  return (
    <Layout handleSearch={handleSearch}>
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
