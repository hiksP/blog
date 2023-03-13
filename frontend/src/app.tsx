import { useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Article from "./components/pages/article/Article";
import Auth from "./components/pages/auth/Auth";
import Home from "./components/pages/Home";
import NotFoundPage from "./components/pages/notFoundPage/NotFoundPage";
import Profile from "./components/pages/Profile/Profile";
import Works from "./components/pages/Works/Works";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Context } from "./main";
import { PostService } from "./services/PostService";

const App: FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { store } = useContext(Context);

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery(["posts"], () => PostService.getPosts());

  useEffect(() => {
    store.checkAuth();
    setLoggedIn(JSON.parse(localStorage.getItem("isAuth")));
  }, []);

  const loginFunc = () => {
    setLoggedIn(true);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home posts={posts} isLoading={isLoading}></Home>}
      />
      <Route path="/login" element={<Auth loginFunc={loginFunc}></Auth>} />
      <Route path="/register" element={<Auth loginFunc={loginFunc}></Auth>} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute
            loggedIn={loggedIn}
            component={<Profile></Profile>}
          ></ProtectedRoute>
        }
      />
      <Route path="/works" element={<Works></Works>} />
      <Route path="/id/:id" element={<Article posts={posts}></Article>} />
      <Route path="*" element={<NotFoundPage></NotFoundPage>} />
    </Routes>
  );
};

export default observer(App);
