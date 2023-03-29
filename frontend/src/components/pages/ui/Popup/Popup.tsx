import styles from './Popup.module.scss'
import { ReactNode, useEffect } from 'react'

type PopupProps = {
  children?: ReactNode
  isOpen: boolean
  onClose: Function
}

const Popup = ({ children, isOpen, onClose }: PopupProps) => {
  const isProfile = window.location.pathname === '/profile'
  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscClose)

    return () => document.removeEventListener('keydown', handleEscClose)
  }, [])

  return (
    <div
      className={
        isOpen ? `${styles.popup} ${styles.opened}` : `${styles.popup}`
      }
    >
      <button
        onClick={() => onClose()}
        className={
          !isProfile ? styles.close : styles.close + ' ' + styles.closeProfile
        }
      ></button>
      {children}
    </div>
  )
}

export default Popup
