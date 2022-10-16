import { Box, Flex, Text } from '@chakra-ui/react'

import { MGTGraph } from 'components/atoms'
import { createUuid } from 'helpers'
import { Direction } from 'types/Direction'

export function MGTDirection({ direction }: { direction: Direction }) {
  return (
    <Box>
      <Text textAlign="center" fontSize="2xl" mb="1">
        Direction
      </Text>
      <Flex wrap="wrap">
        {direction.map((d) => (
          <MGTGraph key={createUuid()} {...d} />
        ))}
      </Flex>
    </Box>
  )
}
