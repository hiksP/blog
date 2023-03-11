import { FC, PropsWithChildren, useEffect, useState } from "react";
import Header from "../../header/Header";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [width, SetWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setTimeout(() => {
      const windowInnerWidth = window.innerWidth;
      SetWidth(windowInnerWidth);
    }, 1000);
  });

  return width > 680 ? (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <div className={styles.layout}>{children}</div>
    </>
  ) : (
    <>
      <Header></Header>
      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default Layout;
