import { useMemo, useState } from 'react'

import { useSelector } from 'react-redux'

import { Box, Flex, Input, Text } from '@chakra-ui/react'

import { MGTgt } from 'components/atoms'
import { createUuid } from 'helpers'
import { selectorGetGameplayTechnologies } from 'store/mgt'

export function MGTGameplay() {
  const gameplayTechnologies = useSelector(selectorGetGameplayTechnologies)
  const [fText, setFText] = useState('')
  const filteredGameplayTechnologies = useMemo(
    () =>
      gameplayTechnologies?.filter((s: any) =>
        s.name.toLocaleLowerCase().includes(fText.toLocaleLowerCase())
      ),
    [gameplayTechnologies, fText]
  )

  if (!gameplayTechnologies) return null

  return (
    <Box>
      <Text textAlign="center" fontSize="2xl" mb="5">
        Gameplay Technologies
      </Text>
      <Box textAlign="center" fontSize="2xl" m="3">
        <Input
          size="sm"
          placeholder="Filter Gameplay Technologies"
          onChange={(e) => setFText(e.target.value)}
        />
      </Box>
      <Flex wrap="wrap">
        {filteredGameplayTechnologies.map((gt) => (
          <MGTgt key={createUuid()} {...gt} />
        ))}
      </Flex>
    </Box>
  )
}
