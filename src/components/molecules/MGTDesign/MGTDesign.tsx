import { Box, Flex, Text } from '@chakra-ui/react'

import { MGTGraph } from 'components/atoms'
import { createUuid } from 'helpers'
import { Design } from 'types/Design'

export function MGTDesign({ design }: { design: Design }) {
  return (
    <Box flex={2}>
      <Text textAlign="center" fontSize="2xl" mb="1">
        Design
      </Text>
      <Flex wrap="wrap" flexDir="column">
        {design.map((d) => (
          <MGTGraph key={createUuid()} {...d} />
        ))}
      </Flex>
    </Box>
  )
}
