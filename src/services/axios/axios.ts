import axios, { AxiosRequestConfig } from 'axios'

import { apiConfig } from 'config/api'
import { toastError } from 'services/toast'
import { helperRemoveActiveRequest } from 'store/loading'

import { bearerTokenSave } from './helper'

const instance = axios.create(apiConfig)

const getRequsetUrl = (config: AxiosRequestConfig) => [config.baseURL, config.url].join('/')

instance.interceptors.request.use(async (config) => config, Promise.reject)

instance.interceptors.response.use(
  (response) => {
    helperRemoveActiveRequest(getRequsetUrl(response.config))
    bearerTokenSave(response.headers?.auth)
    return response
  },
  (error) => {
    helperRemoveActiveRequest(getRequsetUrl(error.config))
    const errorMessage = error?.response?.data?.messages?.[0] ?? error.message
    const status = error?.response?.status || error?.status
    if (status === 401) {
      // history.replace(ROUTES.LOGIN.path);
      // store.dispatch(logoutConfirmedAction() as unknown as AnyAction);
    }

    toastError(errorMessage)
    return Promise.reject(error)
  }
)

export default instance
