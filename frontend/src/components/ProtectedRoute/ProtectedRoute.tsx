import { ReactElement } from 'react'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'

interface IProtectedRoute {
  loggedIn: boolean
  component: ReactElement
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ loggedIn, component }) => {
  return loggedIn ? component : <Navigate to='/' />
}
