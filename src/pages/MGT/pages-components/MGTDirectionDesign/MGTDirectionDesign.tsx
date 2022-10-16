import { useMemo } from 'react'

import { useSelector } from 'react-redux'

import { HStack } from '@chakra-ui/react'

import { MGTDesign, MGTDirection } from 'components/molecules'
import { selectorGetGoodWith, selectorGetSelectedGenre } from 'store/mgt'

export function MGTDirectionDesign() {
  const selectedGenre = useSelector(selectorGetSelectedGenre)
  const goodWith = useSelector(selectorGetGoodWith)
  const direction = useMemo(
    () => goodWith?.direction ?? selectedGenre?.direction,
    [goodWith?.direction, selectedGenre?.direction]
  )
  if (!selectedGenre) return null
  return (
    <HStack>
      {direction?.length && <MGTDirection direction={direction} />}
      {selectedGenre?.design.length && <MGTDesign design={selectedGenre.design} />}
    </HStack>
  )
}
