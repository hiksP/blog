import { FC } from "react";
import Header from "./header/Header";
import styles from "./Home.module.scss";
import Postmaker from "./ui/Postmaker/Postmaker";
import SideBar from "./ui/SideBar/SideBar";
import Stories from "./ui/Stories/Stories";

const Home: FC = () => {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <div className={styles.layout}>
        <Stories></Stories>
        <Postmaker></Postmaker>
      </div>
    </>
  );
};

export default Home;
