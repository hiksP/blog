import styles from "./Input.module.scss";

import { useController, UseControllerProps } from "react-hook-form";

export type FormValues = {
  Email?: string;
  Password?: string;
  Name?: string;
  Confirm?: string;
  URL?: string;
};

export type Avatar = {
  URL: string;
};

function Authinput(props: UseControllerProps<FormValues | Avatar>) {
  const { field, fieldState } = useController(props);
  const toRussian = (placeholder: string) => {
    switch (placeholder) {
      case "Email":
        return "Email";
      case "Password":
        return "Пароль";
      case "Name":
        return "Имя";
      case "Confirm":
        return "Подтвердите пароль";
      case "URL":
        return "Ссылка на аватар";
    }
  };

  return (
    <input
      {...field}
      className={styles.input}
      placeholder={toRussian(props.name)}
    />
  );
}

export default Authinput;
