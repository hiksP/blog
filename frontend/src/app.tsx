import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import Home from './components/pages/Home'
import Profile from './components/pages/Profile/Profile'
import Works from './components/pages/Works/Works'
import Article from './components/pages/article/Article'
import Auth from './components/pages/auth/Auth'
import NotFoundPage from './components/pages/notFoundPage/NotFoundPage'
import { Context } from './main'
import { PostService } from './services/PostService'
import { IPost } from './types/post.interface'
import { useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react-lite'
import { FC, useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

const App: FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [foundPosts, setFoundPosts] = useState<IPost[]>()

  const { store } = useContext(Context)

  // получение постов

  const {
    data: posts,
    error,
    isLoading,
    refetch
  } = useQuery(['posts'], () => PostService.getPosts())

  // проверка на логин

  useEffect(() => {
    store.checkAuth()
    setLoggedIn(JSON.parse(localStorage.getItem('isAuth')))
  }, [])

  const loginFunc = () => {
    setLoggedIn(true)
  }

  // поиск постов

  const handleSearch = (input: string) => {
    const foundPosts = posts?.filter(post => {
      return post.title.toLowerCase().includes(input.toLowerCase())
    })
    setFoundPosts(foundPosts)
  }

  const postsRefetch = () => {
    refetch()
  }

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Home
            handleSearch={handleSearch}
            posts={posts}
            isLoading={isLoading}
            foundPosts={foundPosts}
            postsRefetch={postsRefetch}
          ></Home>
        }
      />
      <Route
        path='/login'
        element={
          <Auth handleSearch={handleSearch} loginFunc={loginFunc}></Auth>
        }
      />
      <Route
        path='/register'
        element={
          <Auth handleSearch={handleSearch} loginFunc={loginFunc}></Auth>
        }
      />
      <Route
        path='/profile'
        element={
          <ProtectedRoute
            loggedIn={loggedIn}
            component={<Profile handleSearch={handleSearch}></Profile>}
          ></ProtectedRoute>
        }
      />
      <Route
        path='/works'
        element={<Works handleSearch={handleSearch}></Works>}
      />
      <Route
        path='/id/:id'
        element={<Article handleSearch={handleSearch} posts={posts}></Article>}
      />
      <Route path='*' element={<NotFoundPage></NotFoundPage>} />
    </Routes>
  )
}

export default observer(App)
