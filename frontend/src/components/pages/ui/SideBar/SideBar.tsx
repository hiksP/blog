import { FC, useState } from "react";
import styles from "./SideBar.module.scss";
import background from "../../../../assets/background.svg";
import inst from "../../../../assets/instagram.svg";
import steve from "../../../../assets/steve.jpg";
import vk from "../../../../assets/vk.svg";
import pinterest from "../../../../assets/pinterest.svg";
import ContactPopup from "../ContactPopup/ContactPopup";
import { Link } from "react-router-dom";

const SideBar: FC = () => {
  const [isContactPopupOpened, setContactPopupOpened] = useState(false);

  const openPopup = () => {
    setContactPopupOpened(true);
  };

  const closePopup = () => {
    setContactPopupOpened(false);
  };

  return (
    <>
      <section className={styles.sidebar}>
        <img src={background} className={styles.bgImage} />
        <div className={styles.container}>
          <img src={steve} className={styles.photo} />
          <h2 className={styles.name}>Петр Плавских</h2>
          <p className={styles.brief}>Блог не разработчика</p>
          <ul className={styles.socials}>
            <a
              href="https://instagram.com"
              target="_blank"
              className={styles.el}
            >
              <img src={inst} />
            </a>
            <a href="https://vk.com/" target="_blank" className={styles.el}>
              <img src={vk} />
            </a>
            <a
              href="https://ru.pinterest.com/"
              target="_blank"
              className={styles.el}
            >
              <img src={pinterest} />
            </a>
          </ul>
          <p className={styles.description}>
            (НЕ)Front-end разработчик. Но надеюсь, когда-нибудь им стать.
          </p>
          <div className={styles.buttons}>
            <Link to="/works">
              <button className={styles.button}>Мои работы</button>
            </Link>
            <button onClick={openPopup} className={styles.button}>
              Написать мне
            </button>
          </div>
        </div>
      </section>
      <ContactPopup
        isOpen={isContactPopupOpened}
        onClose={closePopup}
      ></ContactPopup>
    </>
  );
};

export default SideBar;
