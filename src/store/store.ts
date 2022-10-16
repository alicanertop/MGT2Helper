import { configureStore } from '@reduxjs/toolkit'

import { isDev } from 'config/env'

import { loadingReducers } from './loading'
import { mgtReducers } from './mgt'

const reducer = { loading: loadingReducers, mgt: mgtReducers }
export const store = configureStore({ reducer, devTools: isDev })
export type IRootState = ReturnType<typeof store.getState>
export type IRootDispatch = typeof store.dispatch

// store.subscribe(() => {
//   const storeState = store.getState()
// })
