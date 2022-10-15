import { AntiCheat } from './AntiCheat'
import { ConsoleHardware } from './ConsoleHardware'
import { CopyProtection } from './CopyProtection'
import { EngineTechnology } from './EngineTechnology'
import { FeaturesConsole } from './FeaturesConsole'
import { GameplayKeyAndIcons } from './GameplayKeyAndIcons'
import { GameplayTechnology } from './GameplayTechnology'
import { Genre } from './Genre'
import { NpcEngine } from './NpcEngine'

export type RootObject = {
  genre: Genre[]
  antiCheats: AntiCheat[]
  npcEngines: NpcEngine[]
  copyProtection: CopyProtection[]
  consoleHardware: ConsoleHardware[]
  featuresConsoles: FeaturesConsole[]
  engineTechnology: EngineTechnology[]
  gameplayKeyAndIcons: GameplayKeyAndIcons
  gameplayTechnologies: GameplayTechnology[]
}
