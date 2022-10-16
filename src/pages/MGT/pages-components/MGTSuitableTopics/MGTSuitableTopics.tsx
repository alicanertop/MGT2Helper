import { useMemo, useState } from 'react'

import { useSelector } from 'react-redux'

import { Box, Flex, Input, Text } from '@chakra-ui/react'

import { MGTTag } from 'components/atoms'
import { createUuid } from 'helpers'
import { selectorGetSelectedGenre } from 'store/mgt'

export function MGTSuitableTopics() {
  const selectedGenre = useSelector(selectorGetSelectedGenre)

  const [fText, setFText] = useState('')
  const filteredSuitableTopics = useMemo(
    () =>
      selectedGenre?.suitableTopics.filter((s) =>
        s.toLocaleLowerCase().includes(fText.toLocaleLowerCase())
      ),
    [selectedGenre, fText]
  )

  if (!selectedGenre?.suitableTopics.length) return null

  return (
    <Box>
      <Text textAlign="center" fontSize="2xl" mb="1">
        Suitable Topics
      </Text>
      <Box textAlign="center" fontSize="2xl" m="3">
        <Input
          size="sm"
          placeholder="Filter Suitable Topics"
          onChange={(e) => setFText(e.target.value)}
        />
      </Box>
      <Flex wrap="wrap" align="center" justify="center">
        {filteredSuitableTopics?.map((topic, i) => (
          <MGTTag key={createUuid()} topic={topic} index={i} />
        ))}
      </Flex>
    </Box>
  )
}
