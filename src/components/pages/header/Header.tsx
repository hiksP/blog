import { FC } from "react";
import Navigation from "../ui/Navigation/Navigation";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
