import { AxiosRequestConfig } from 'axios'

import { LocalStorageKeys } from 'const'

export const bearerTokenAddingToHeader = (headers: AxiosRequestConfig['headers']) => {
  const authToken = localStorage.getItem(LocalStorageKeys.AuthToken)
  return {
    headers,
    ...(authToken ? { Authorization: `Bearer ${authToken}` } : {})
  } as AxiosRequestConfig['headers']
}

export const bearerTokenSave = (authToken?: string) => {
  if (authToken) localStorage.setItem(LocalStorageKeys.AuthToken, authToken)
}
