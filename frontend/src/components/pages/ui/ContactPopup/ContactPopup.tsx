import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./ContactPopup.module.scss";
import Popup from "../Popup/Popup";
import { useState } from "react";
import { ContactService } from "../../../../services/ContactService";

type ContactPopupProps = {
  isOpen: boolean;
  onClose: Function;
};

const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sumbitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await ContactService.Contact(message, name, email);
      onClose();
      alert("Ваше письмо доставлено");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={(e) => {
          sumbitHandler(e);
        }}
        className={styles.form}
      >
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Ваше имя"
        ></Input>
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Ваш e-mail"
        ></Input>
        <Input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Текст сообщения"
        ></Input>
        <Button>Отправить</Button>
        <p className={styles.email}>e-mail: qksyo@yandex.ru</p>
      </form>
    </Popup>
  );
};

export default ContactPopup;
