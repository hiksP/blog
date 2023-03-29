import './index.css'
import App from './app'
import Store from './store/store'
import { State } from './types/state.interface'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()
const store = new Store()
export const Context = createContext<State>({
  store
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Context.Provider value={{ store }}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Context.Provider>
  </QueryClientProvider>
)
