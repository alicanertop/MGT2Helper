import { Design } from './Design'
import { Direction } from './Direction'
import { GoodWith } from './GoodWith'

export type Genre = {
  name: string
  design: Design
  subGenre: string[]
  releaseDate: string
  goodWith: GoodWith[]
  targetGroup: string[]
  suitableTopics: string[]
  direction: Direction
}
