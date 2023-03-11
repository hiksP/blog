import { FC, useEffect, useState } from "react";
import BurgerMenu from "../ui/BurgerMenu/BurgerMenu";
import Navigation from "../ui/Navigation/Navigation";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const [width, SetWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setTimeout(() => {
      const windowInnerWidth = window.innerWidth;
      SetWidth(windowInnerWidth);
    }, 1000);
  });

  return width > 680 ? (
    <header className={styles.header}>
      <Navigation></Navigation>
    </header>
  ) : (
    <header className={styles.header}>
      <BurgerMenu></BurgerMenu>
    </header>
  );
};

export default Header;
