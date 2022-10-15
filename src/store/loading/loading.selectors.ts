import { createSelector } from 'reselect'

import { IRootState } from 'store/store'

export const selectorGetLoadingState = (state: IRootState) => state.loading

export const selectorGetActiveRequests = createSelector(
  selectorGetLoadingState,
  (state) => state.activeRequests,
)

export const selectorGetHasRequestActive = createSelector(
  selectorGetLoadingState,
  (state) => state.hasRequestActive,
)

export const selectorGetIsLoading = createSelector(
  selectorGetLoadingState,
  (state) => state.showLoading,
)
