import { StrictMode, useMemo } from 'react'

import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'

import { reactQueryConfig } from 'config/react-query'
import { history } from 'services/history'
import { store } from 'store'

import { App } from './App'

import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.css'

const Index = () => {
  const queryClient = useMemo(() => new QueryClient(reactQueryConfig), [])

  return (
    <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <HistoryRouter history={history}>
            <App />
          </HistoryRouter>
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  )
}

createRoot(document.getElementById('mount-point')!).render(<Index />)
