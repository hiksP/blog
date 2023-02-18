import { FC } from "react";
import Layout from "../ui/Layout/Layout";
import Work from "../ui/work/Work";
import styles from "./Works.module.scss";

const Works: FC = () => {
  return (
    <Layout>
      <section className={styles.works}>
        <h2 className={styles.title}>Мои работы</h2>
        <ul className={styles.list}>
          <Work></Work>
        </ul>
      </section>
    </Layout>
  );
};

export default Works;
