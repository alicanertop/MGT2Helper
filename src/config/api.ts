import { AxiosRequestConfig } from 'axios'

import { baseApiUrl } from './env'

export const apiConfig: AxiosRequestConfig = {
  baseURL: `//${baseApiUrl}`
  // headers: { 'Content-Type': 'application/json' },
  // timeout: 1000 * 60 * 30, //30 dk
}

export const githubGistLink =
  'https://gist.githubusercontent.com/alicanertop/b0081d9305e04d1c1600ad45da2fdb19/raw/ac578aac58aec162ece8b10ba7799e7710301315/Mad%2520Games%2520Tycoon%25202%2520Json'
