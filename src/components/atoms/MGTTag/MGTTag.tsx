import { Tag } from '@chakra-ui/react'

const colorScheme = ['green', 'teal', 'purple']

export function MGTTag({ topic, index }: { topic: string; index: number }) {
  return (
    <Tag m="1" size="md" colorScheme={colorScheme[index % colorScheme.length]}>
      {topic}
    </Tag>
  )
}
