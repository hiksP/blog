import styles from "./Input.module.scss";

import { useForm, useController, UseControllerProps } from "react-hook-form";

export type FormValues = {
  Email: string;
  Password: string;
  Name?: string;
};

function Authinput(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props);

  return <input {...field} className={styles.input} placeholder={props.name} />;
}

export default Authinput;
