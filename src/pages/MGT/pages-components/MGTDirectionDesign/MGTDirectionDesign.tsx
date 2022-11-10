import { useMemo } from 'react'

import { useSelector } from 'react-redux'

import { Flex } from '@chakra-ui/react'

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
    <Flex w="full" flexDir={{ base: 'column', lg: 'row' }} pb="2" borderBottom="1px solid teal">
      {direction?.length && <MGTDirection direction={direction} />}
      {selectedGenre?.design.length && <MGTDesign design={selectedGenre.design} />}
    </Flex>
  )
}
