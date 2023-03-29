import { Context } from '../../../../main'
import Button from '../Button/Button'
import AuthError from '../Error/AuthError'
import Authinput, { Avatar, FormValues } from '../Input/Authinput'
import Popup from '../Popup/Popup'
import styles from './AvatarPopup.module.scss'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

type AvatarPopupProps = {
  isOpen: boolean
  onClose: Function
}

const AvatarPopup = ({ isOpen, onClose }: AvatarPopupProps) => {
  const { store } = useContext(Context)

  const { handleSubmit, formState, control } = useForm<FormValues>({
    defaultValues: {
      URL: store.user.avatar
    },
    mode: 'onChange'
  })

  const onSubmit = (data: FormValues) => {
    store.updateAvatar(data.URL)
    onClose()
  }

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Authinput
          control={control}
          name='URL'
          rules={{
            required: 'Пожалуйста, оставьте ссылку на аватрку',
            pattern: {
              value: /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i,
              message: 'Введите верную ссылку'
            }
          }}
        ></Authinput>
        {formState.errors.URL && (
          <AuthError>{formState.errors.URL.message}</AuthError>
        )}
        <Button disabled={!formState.isValid} type='submit'>
          Сохранить
        </Button>
      </form>
    </Popup>
  )
}

export default AvatarPopup
