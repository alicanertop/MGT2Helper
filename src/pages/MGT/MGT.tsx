import { Box, Stack } from '@chakra-ui/react'

import {
  MGTDirectionDesign,
  MGTGameplay,
  MGTSelect,
  MGTSuitableTopics,
  MGTTargetGroup
} from './pages-components'

export function MGT() {
  return (
    <Box w="full" minH="100vh" padding={5}>
      <Stack>
        <MGTSelect />
        <MGTTargetGroup />
        <MGTSuitableTopics />
        <MGTDirectionDesign />
        <MGTGameplay />
      </Stack>
    </Box>
  )
}
