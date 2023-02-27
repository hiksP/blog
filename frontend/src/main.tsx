import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import NotFoundPage from "./components/pages/notFoundPage/NotFoundPage";
import Auth from "./components/pages/auth/Auth";
import Profile from "./components/pages/Profile/Profile";
import Works from "./components/pages/Works/Works";
import Article from "./components/pages/article/Article";
import Store from "./store/store";
import { State } from "./types/state.interface";

const queryClient = new QueryClient();
const store = new Store();
export const Context = createContext<State>({
  store,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Context.Provider value={{ store }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Auth></Auth>} />
          <Route path="/register" element={<Auth></Auth>} />
          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/works" element={<Works></Works>} />
          <Route path="/:id" element={<Article></Article>} />
          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  </QueryClientProvider>
);
