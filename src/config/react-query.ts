import { QueryClientConfig } from 'react-query'

export const reactQueryConfig: QueryClientConfig = {
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 0 } },
}
