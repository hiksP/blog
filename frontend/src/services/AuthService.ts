import $api from '../http'
import { authResponse } from '../types/authResponse.interface'
import { AxiosResponse } from 'axios'

export const AuthService = {
  async signin(
    email: string,
    password: string
  ): Promise<AxiosResponse<authResponse>> {
    return $api.post<authResponse>('/signin', { email, password })
  },

  async signup(
    email: string,
    password: string,
    name: string
  ): Promise<AxiosResponse<authResponse>> {
    return $api.post<authResponse>('/signup', { email, password, name })
  },

  async logout(): Promise<void> {
    return $api.post('/signout')
  }
}
