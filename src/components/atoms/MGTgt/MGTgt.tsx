import { useSelector } from 'react-redux'

import { Box, Divider, Flex, Tag, Text } from '@chakra-ui/react'

import { createUuid } from 'helpers'
import mgt2 from 'json/mgt2.json'
import { selectorGetSelectedGenreValue, selectorGetSelectedSubGenreValue } from 'store/mgt'
import { GameplayTechnology } from 'types/GameplayTechnology'

const icons = mgt2.gameplayKeyAndIcons as Record<string, string>

const colorScheme: Record<string, string> = {
  bad: 'red',
  none: 'gray',
  good: 'green',
  middle: 'orange'
}

export function MGTgt({ name, ...rest }: GameplayTechnology) {
  const selectedGenreValue = useSelector(selectorGetSelectedGenreValue)
  const selectedSubGenreValue = useSelector(selectorGetSelectedSubGenreValue)

  return (
    <Box minW="50%">
      <Divider my="2" />
      <Text fontSize="lg">{name}</Text>
      <Divider my="2" />
      <Box>
        {Object.keys(icons)
          .map((key: any) => {
            const values = (rest as unknown as Record<string, string[]>)[key]
            if (!values.length) return undefined
            return (
              <Flex key={createUuid()} w="full">
                {`${icons[key]}`}
                <Text ml="3">
                  {values.map((v) => (
                    <Text as="span" key={createUuid()}>
                      {v.includes(selectedGenreValue!) || v.includes(selectedSubGenreValue!) ? (
                        <Tag size="md" colorScheme={colorScheme[key]}>
                          {v}
                        </Tag>
                      ) : (
                        v
                      )}
                      {` `}
                    </Text>
                  ))}
                </Text>
              </Flex>
            )
          })
          .filter(Boolean)}
      </Box>
    </Box>
  )
}
