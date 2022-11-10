import { useSelector } from 'react-redux'

import { Box, Flex, Text } from '@chakra-ui/react'

import { MGTTag } from 'components/atoms'
import { createUuid } from 'helpers'
import { selectorGetSelectedGenre } from 'store/mgt'

export function MGTTargetGroup() {
  const selectedGenre = useSelector(selectorGetSelectedGenre)
  if (!selectedGenre?.targetGroup.length) return null

  return (
    <Box pb="2" borderBottom="1px solid teal">
      <Text textAlign="center" fontSize="2xl" mb="1">
        Target Group
      </Text>
      <Flex wrap="wrap" align="center" justify="center">
        {selectedGenre?.targetGroup?.map((topic, i) => (
          <MGTTag key={createUuid()} topic={topic} index={i} />
        ))}
      </Flex>
    </Box>
  )
}
