import { store } from '../store'
import { loadingActions } from './loading.slice'

export const helperAddActiveRequest = (requestUrl: string) =>
  store.dispatch(loadingActions.addActiveRequest(requestUrl))

export const helperRemoveActiveRequest = (requestUrl: string) =>
  store.dispatch(loadingActions.removeActiveRequest(requestUrl))
