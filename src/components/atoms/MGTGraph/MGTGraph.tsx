import { HStack, Text } from '@chakra-ui/react'

import { NameValue } from 'types/NameValue'

export function MGTGraph({ name, value }: NameValue) {
  return (
    <HStack p="1" border="1px solid teal" m="2" borderRadius="lg">
      <Text w="full" fontSize="lg">
        {name}
      </Text>
      <Text fontSize="lg" fontWeight="bold">
        {value}
      </Text>
    </HStack>
  )
}
