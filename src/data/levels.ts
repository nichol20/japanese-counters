import { Level } from "@/types/stages";
import { hikiLevelReferences, honLevelReferences, maiLevelReferences } from "./references";

export const maiLevels: Level[] = [
  {
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: maiLevelReferences[0]
  },
  {
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: maiLevelReferences[1]
  },
  {
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...maiLevelReferences[0], ...maiLevelReferences[1]]
  }
]

export const honLevels: Level[] = [
  {
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: honLevelReferences[0]
  },
  {
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: honLevelReferences[1]
  },
  {
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...honLevelReferences[0], ...honLevelReferences[1]]
  }
]

export const hikiLevels: Level[] = [
  {
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: hikiLevelReferences[0]
  },
  {
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: hikiLevelReferences[1]
  },
  {
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...hikiLevelReferences[0], ...hikiLevelReferences[1]]
  }
]