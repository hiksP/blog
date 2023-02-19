import { FC, useEffect } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Layout from "../ui/Layout/Layout";
import styles from "./Article.module.scss";
import image from "../../../assets/image.svg";

const Article: FC = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://yastatic.net/share2/share.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <section className={styles.article}>
        <div className={styles.container}>
          <div className={styles.buttons}>
            <div
              className={`ya-share2 ${styles.share}`}
              data-curtain
              data-shape="round"
              data-limit="0"
              data-more-button-type="short"
              data-services="vkontakte,telegram,whatsapp,linkedin"
            ></div>
          </div>
          <h2 className={styles.title}>Как создавать сайты легко</h2>
          <p className={styles.date}>21.06.2020</p>
          <img src={image} className={styles.image}></img>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
            sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
            Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
            volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Elementum volutpat orci turpis
            urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor
            orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia
            eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare
            vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere
            tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt
            arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam
            sit sed volutpat massa. Egestas ornare vel volutpat.
          </p>
        </div>
        <h3 className={styles.otherArticles}>Интересно почитать</h3>
        <div className={styles.links}>
          <div className={styles.col}>
            <a className={styles.link}>Как я сходил на FrontEnd Conf 2021</a>
            <a className={styles.link}>Купил новый ноутбук за 150 000 руб</a>
          </div>
          <div className={styles.col}>
            <a className={styles.link}>Как я сходил на FrontEnd Conf 2021</a>
            <a className={styles.link}>Купил новый ноутбук за 150 000 руб</a>
          </div>
        </div>
        <div className={styles.discussion}>
          <h3 className={styles.discuss}>Обсуждение</h3>
          <form className={styles.form}>
            <Input placeholder="Напишите комментарий"></Input>
            <Button>Отправить</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Article;
