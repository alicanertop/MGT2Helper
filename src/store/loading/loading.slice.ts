import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type ILoadingState = {
  showLoading: boolean
  hasRequestActive: boolean
  activeRequests: Record<string, number>
}

const initialState: ILoadingState = {
  showLoading: false,
  hasRequestActive: false,
  activeRequests: {},
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    addActiveRequest: (state, action: PayloadAction<string>) => {
      state.activeRequests[action.payload] = state.activeRequests[action.payload]
        ? state.activeRequests[action.payload] + 1
        : 1

      state.hasRequestActive = Object.keys(state.activeRequests).length > 0
    },
    removeActiveRequest: (state, action: PayloadAction<string>) => {
      const activeRequests = { ...state.activeRequests }
      if (typeof activeRequests[action.payload] === 'number') {
        activeRequests[action.payload] -= 1
        if (activeRequests[action.payload] <= 0) {
          delete activeRequests[action.payload]
        }
      }

      state.activeRequests = { ...activeRequests }
      state.hasRequestActive = Object.keys(state.activeRequests).length > 0
    },
    showLoading: (state, action: PayloadAction<boolean>) => {
      state.showLoading = action.payload
    },
  },
})

export const loadingReducers = loadingSlice.reducer
export const loadingActions = loadingSlice.actions
