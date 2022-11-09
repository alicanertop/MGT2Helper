import { useEffect } from 'react'

import { Box, Stack } from '@chakra-ui/react'

import { store } from 'store'
import { mgtActions } from 'store/mgt'

import {
  MGTDirectionDesign,
  MGTGameplay,
  MGTSelect,
  MGTSuitableTopics,
  MGTTargetGroup
} from './pages-components'

export function MGT() {
  useEffect(() => {
    store.dispatch(mgtActions.fetchmgt2Json())
  }, [])

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
