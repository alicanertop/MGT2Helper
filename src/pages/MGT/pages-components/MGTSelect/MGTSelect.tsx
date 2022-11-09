import { useSelector } from 'react-redux'

import { Box, HStack, Select, Text } from '@chakra-ui/react'

import { createUuid } from 'helpers'
import { store } from 'store'
import {
  mgtActions,
  selectorGetGenreNameList,
  selectorGetSelectedGenre,
  selectorGetSelectedGenreValue,
  selectorGetSelectedSubGenreValue
} from 'store/mgt'

export function MGTSelect() {
  const genreNameList = useSelector(selectorGetGenreNameList)

  const selectedGenre = useSelector(selectorGetSelectedGenre)
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
          variant="filled"
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
          variant="filled"
          value={selectedSubGenreValue}
          disabled={!selectedGenreValue}
          placeholder="Select SubGenre List"
          onChange={(v) => store.dispatch(mgtActions.selectSubGenre(v.target.value))}>
          {genreNameList
            .filter((g) => g !== selectedGenreValue)
            .map((genre) => (
              <option
                style={{ fontWeight: selectedGenre?.subGenre.includes(genre) ? 'bold' : 'unset' }}
                key={createUuid()}
                value={genre}>
                {selectedGenre?.subGenre.includes(genre) ? '*' : ''}
                {genre}
                {selectedGenre?.subGenre.includes(genre) ? '*' : ''}
              </option>
            ))}
        </Select>
      </HStack>
    </Box>
  )
}
