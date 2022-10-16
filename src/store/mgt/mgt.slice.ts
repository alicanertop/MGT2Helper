import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import mgt2 from 'json/mgt2.json'
import { GameplayTechnology } from 'types/GameplayTechnology'
import { Genre } from 'types/Genre'
import { GoodWith } from 'types/GoodWith'

export type IMGTState = {
  genreList: Genre[]
  goodWith?: GoodWith
  selectedGenre?: Genre
  subGenreList: string[]
  genreNameList: string[]
  selectedGenreValue?: string
  selectedSubGenreValue?: string
  gameplayTechnologies: GameplayTechnology[]
}

const initialState: IMGTState = {
  subGenreList: [],
  genreList: mgt2.genreList,
  gameplayTechnologies: mgt2.gameplayTechnologies,
  genreNameList: mgt2.genreList.map((genre) => genre.name).sort((a, b) => a.localeCompare(b))
}

export const mgtSlice = createSlice({
  name: 'mgt',
  initialState,
  reducers: {
    selectGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenreValue = action.payload
      state.selectedGenre = state.genreList.find((genre) => genre.name === action.payload)
      state.subGenreList = state.selectedGenre?.subGenre ?? []
    },
    selectSubGenre: (state, action: PayloadAction<string>) => {
      state.selectedSubGenreValue = action.payload
      state.goodWith = state.selectedGenre?.goodWith.find((g) => g.name === action.payload)
    }
  }
})

export const mgtReducers = mgtSlice.reducer
export const mgtActions = mgtSlice.actions
