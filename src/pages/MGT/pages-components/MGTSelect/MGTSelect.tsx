import { useSelector } from 'react-redux'

import { Box, HStack, Select, Text } from '@chakra-ui/react'

import { createUuid } from 'helpers'
import { store } from 'store'
import {
  mgtActions,
  selectorGetGenreNameList,
  selectorGetSelectedGenreValue,
  selectorGetSelectedSubGenreValue,
  selectorGetSubGenreList
} from 'store/mgt'

export function MGTSelect() {
  const subGenreList = useSelector(selectorGetSubGenreList)
  const genreNameList = useSelector(selectorGetGenreNameList)

  const selectedGenreValue = useSelector(selectorGetSelectedGenreValue)
  const selectedSubGenreValue = useSelector(selectorGetSelectedSubGenreValue)

  return (
    <Box>
      <Text textAlign="center" fontSize="2xl" mb="1">
        Please Select Genres
      </Text>
      <HStack>
        <Select
          size="sm"
          value={selectedGenreValue}
          placeholder="Select Genre List"
          onChange={(v) => store.dispatch(mgtActions.selectGenre(v.target.value))}>
          {genreNameList.map((genre) => (
            <option key={createUuid()} value={genre}>
              {genre}
            </option>
          ))}
        </Select>
        <Select
          size="sm"
          value={selectedSubGenreValue}
          disabled={!subGenreList.length}
          placeholder="Select SubGenre List"
          onChange={(v) => store.dispatch(mgtActions.selectSubGenre(v.target.value))}>
          {subGenreList.map((genre) => (
            <option key={createUuid()} value={genre}>
              {genre}
            </option>
          ))}
        </Select>
      </HStack>
    </Box>
  )
}
