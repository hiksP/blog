import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);
