import React from "react";
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

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="*" element={<NotFoundPage></NotFoundPage>} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
