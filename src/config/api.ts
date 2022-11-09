import { AxiosRequestConfig } from 'axios'

import { baseApiUrl } from './env'

export const apiConfig: AxiosRequestConfig = {
  baseURL: `//${baseApiUrl}`
  // headers: { 'Content-Type': 'application/json' },
  // timeout: 1000 * 60 * 30, //30 dk
}

export const githubGistLink =
  'https://gist.github.com/alicanertop/b0081d9305e04d1c1600ad45da2fdb19/raw'
