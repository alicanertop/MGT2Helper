import { Box, Stack } from '@chakra-ui/react'

import { MGTDirectionDesign, MGTGameplay, MGTSelect, MGTSuitableTopics } from './pages-components'

export function MGT() {
  return (
    <Box w="full" minH="100vh" bgColor="rgba(0,0,0,0.3)" padding={5}>
      <Stack>
        <MGTSelect />
        <MGTSuitableTopics />
        <MGTDirectionDesign />
        <MGTGameplay />
      </Stack>
    </Box>
  )
}
