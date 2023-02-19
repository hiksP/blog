import { FC, PropsWithChildren, ReactNode, useEffect } from "react";
import styles from "./Popup.module.scss";

type PopupProps = {
  children?: ReactNode;
  isOpen: boolean;
  onClose: Function;
};

const Popup = ({ children, isOpen, onClose }: PopupProps) => {
  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => document.removeEventListener("keydown", handleEscClose);
  }, []);

  return (
    <div
      className={
        isOpen ? `${styles.popup} ${styles.opened}` : `${styles.popup}`
      }
    >
      <button onClick={() => onClose()} className={styles.close}></button>
      {children}
    </div>
  );
};

export default Popup;
