import { FC, useEffect } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./ContactPopup.module.scss";
import cancel from "../../../../assets/cancel.svg";
import Popup from "../Popup/Popup";

type ContactPopupProps = {
  isOpen: boolean;
  onClose: Function;
  onSubmit?: Function;
};

const ContactPopup = ({ isOpen, onClose, onSubmit }: ContactPopupProps) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form className={styles.form}>
        <Input placeholder="Ваше имя"></Input>
        <Input placeholder="Ваш e-mail"></Input>
        <Input placeholder="Текст сообщения"></Input>
        <Button>Отправить</Button>
        <p className={styles.email}>e-mail: qksyo@yandex.ru</p>
      </form>
    </Popup>
  );
};

export default ContactPopup;
