import { HStack, Text } from '@chakra-ui/react'

import { NameValue } from 'types/NameValue'

export function MGTGraph({ name, value }: NameValue) {
  return (
    <HStack minW={{ base: 100, lg: 350 }} borderBottom="1px solid teal" m="2">
      <Text w="full" fontSize="lg">
        {name}
      </Text>
      <Text fontSize="lg">{value}</Text>
    </HStack>
  )
}
