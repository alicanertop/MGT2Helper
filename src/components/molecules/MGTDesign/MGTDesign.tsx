import { Box, Flex, Text } from '@chakra-ui/react'

import { MGTGraph } from 'components/atoms'
import { createUuid } from 'helpers'
import { Design } from 'types/Design'

export function MGTDesign({ design }: { design: Design }) {
  return (
    <Box>
      <Text textAlign="center" fontSize="2xl" mb="1">
        Design
      </Text>
      <Flex wrap="wrap">
        {design.map((d) => (
          <MGTGraph key={createUuid()} {...d} />
        ))}
      </Flex>
    </Box>
  )
}
