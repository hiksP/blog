import { API_URL } from '../http'
import { AuthService } from '../services/AuthService'
import { UserService } from '../services/UserService'
import { authResponse } from '../types/authResponse.interface'
import { IUser } from '../types/user.inteface'
import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import { NavigateFunction } from 'react-router-dom'

export default class Store {
  user = {} as IUser
  isAuth = false
  requestCompleted = false

  constructor() {
    makeAutoObservable(this)
  }

  setLocalStorage(user: IUser) {
    localStorage.setItem('userName', user.name)
    localStorage.setItem('Email', user.email)
    localStorage.setItem('isAuth', JSON.stringify(true))
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: IUser) {
    this.user = user
  }

  async login(email: string, password: string, navigate: NavigateFunction) {
    try {
      const response = await AuthService.signin(email, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
      this.setLocalStorage(response.data.user)
      navigate('/')
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async register(
    email: string,
    password: string,
    name: string,
    navigate: NavigateFunction
  ) {
    try {
      const response = await AuthService.signup(email, password, name)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
      this.setLocalStorage(response.data.user)
      navigate('/')
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser({} as IUser)
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<authResponse>(`${API_URL}/refresh`, {
        withCredentials: true
      })
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
      this.requestCompleted = true
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async updateAvatar(url: string) {
    try {
      const response = await UserService.updateAvatar(url)
      this.setUser(response.data)
      this.setLocalStorage(response.data)
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async patchUser(email: string, name: string) {
    try {
      const response = await UserService.updateMe(email, name)
      this.setUser(response.data)
      this.setLocalStorage(response.data)
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }
}
