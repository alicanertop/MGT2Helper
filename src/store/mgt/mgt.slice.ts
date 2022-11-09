/* eslint-disable no-console */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { githubGistLink } from 'config/api'
import mgt2 from 'json/mgt2.json'
import { instance } from 'services/axios'
import { GameplayTechnology } from 'types/GameplayTechnology'
import { Genre } from 'types/Genre'
import { GoodWith } from 'types/GoodWith'

export type IMGTState = {
  genreList: Genre[]
  goodWith?: GoodWith
  selectedGenre?: Genre
  genreNameList: string[]
  selectedGenreValue?: string
  selectedSubGenreValue?: string
  gameplayTechnologies: GameplayTechnology[]
}

const initialState: IMGTState = {
  genreList: [],
  genreNameList: [],
  gameplayTechnologies: []
}

const fetchmgt2Json = createAsyncThunk(
  'mgt/json',
  async (): Promise<IMGTState> => (await instance.get(githubGistLink)).data
)

export const mgtSlice = createSlice({
  name: 'mgt',
  initialState,
  reducers: {
    selectGenre: (state, action: PayloadAction<string>) => {
      state.selectedSubGenreValue = undefined
      state.selectedGenreValue = action.payload
      state.selectedGenre = state.genreList.find((genre) => genre.name === action.payload)
    },
    selectSubGenre: (state, action: PayloadAction<string>) => {
      state.selectedSubGenreValue = action.payload || undefined
      state.goodWith = state.selectedGenre?.goodWith.find((g) => g.name === action.payload)
    }
  },
  extraReducers: (builders) => {
    builders.addCase(fetchmgt2Json.fulfilled, (state, action) => {
      state.genreList = action.payload.genreList
      state.gameplayTechnologies = action.payload.gameplayTechnologies
      state.genreNameList = action.payload.genreList
        .map((genre) => genre.name)
        .sort((a, b) => a.localeCompare(b))

      console.log('mgt/json loaded')
    })
    builders.addCase(fetchmgt2Json.rejected, (state) => {
      state.genreList = mgt2.genreList
      state.gameplayTechnologies = mgt2.gameplayTechnologies
      state.genreNameList = mgt2.genreList
        .map((genre) => genre.name)
        .sort((a, b) => a.localeCompare(b))
    })
    console.log('mgt/json load failed default json loaded')
  }
})

export const mgtReducers = mgtSlice.reducer
export const mgtActions = { ...mgtSlice.actions, fetchmgt2Json }
