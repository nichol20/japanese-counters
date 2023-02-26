import { Level } from "@/types/stages";
import { hikiLevelReferences, honLevelReferences, maiLevelReferences } from "./references";

export const maiLevels: Level[] = [
  {
    chapter: 'level 1',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: maiLevelReferences[0]
  },
  {
    chapter: 'level 2',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: maiLevelReferences[1]
  },
  {
    chapter: 'level 3',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...maiLevelReferences[0], ...maiLevelReferences[1]]
  }
]

export const honLevels: Level[] = [
  {
    chapter: 'level 4',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: honLevelReferences[0]
  },
  {
    chapter: 'level 5',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: honLevelReferences[1]
  },
  {
    chapter: 'level 6',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...honLevelReferences[0], ...honLevelReferences[1]]
  }
]

export const hikiLevels: Level[] = [
  {
    chapter: 'level 7',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: hikiLevelReferences[0]
  },
  {
    chapter: 'level 8',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: hikiLevelReferences[1]
  },
  {
    chapter: 'level 9',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...hikiLevelReferences[0], ...hikiLevelReferences[1]]
  }
]