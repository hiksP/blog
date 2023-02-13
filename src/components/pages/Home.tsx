import { FC } from "react";
import Header from "./header/Header";
import styles from "./Home.module.scss";
import SideBar from "./ui/SideBar/SideBar";

const Home: FC = () => {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
    </>
  );
};

export default Home;
