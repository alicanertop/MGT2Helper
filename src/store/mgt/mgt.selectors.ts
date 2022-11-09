import { createSelector } from 'reselect'

import { IRootState } from 'store/store'

export const selectorGetMGTState = (state: IRootState) => state.mgt

export const selectorGetGenreNameList = createSelector(
  selectorGetMGTState,
  (state) => state.genreNameList
)

export const selectorGetSelectedGenre = createSelector(
  selectorGetMGTState,
  (state) => state.selectedGenre
)

export const selectorGetGoodWith = createSelector(selectorGetMGTState, (state) => state.goodWith)

export const selectorGetSelectedGenreValue = createSelector(
  selectorGetMGTState,
  (state) => state.selectedGenreValue
)

export const selectorGetSelectedSubGenreValue = createSelector(
  selectorGetMGTState,
  (state) => state.selectedSubGenreValue
)

export const selectorGetGameplayTechnologies = createSelector(
  selectorGetMGTState,
  (state) => state.gameplayTechnologies
)
