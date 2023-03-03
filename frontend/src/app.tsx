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

const App: FC = () => {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isAuth"))
  );

  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/login" element={<Auth></Auth>} />
      <Route path="/register" element={<Auth></Auth>} />
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
      <Route path="/id/:id" element={<Article></Article>} />
      <Route path="*" element={<NotFoundPage></NotFoundPage>} />
    </Routes>
  );
};

export default App;
