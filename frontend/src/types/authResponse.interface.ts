import { IUser } from './user.inteface'

export interface authResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}
