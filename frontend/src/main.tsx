import { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Store from "./store/store";
import { State } from "./types/state.interface";
import App from "./app";

const queryClient = new QueryClient();
const store = new Store();
export const Context = createContext<State>({
  store,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Context.Provider value={{ store }}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Context.Provider>
  </QueryClientProvider>
);
