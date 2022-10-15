import { useSelector } from 'react-redux'

import { selectorGetActiveRequests } from 'store/loading'

import { Home } from './pages'

export function App() {
  const getActiveRequests = useSelector(selectorGetActiveRequests)
  console.log({ getActiveRequests })

  return <Home />
}
