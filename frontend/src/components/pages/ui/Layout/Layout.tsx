import { FC, PropsWithChildren } from "react";
import Header from "../../header/Header";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default Layout;
