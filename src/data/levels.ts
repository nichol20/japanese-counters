import { Level } from "@/types/stages";
import { hikiLevelReferences, honLevelReferences, maiLevelReferences } from "./references";

export const maiLevels: Level[] = [
  {
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: maiLevelReferences[1]
  },
  {
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: maiLevelReferences[2]
  },
  {
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...maiLevelReferences[1], ...maiLevelReferences[2]]
  }
]

export const honLevels: Level[] = [
  {
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: honLevelReferences[1]
  },
  {
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: honLevelReferences[2]
  },
  {
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...honLevelReferences[1], ...honLevelReferences[2]]
  }
]

export const hikiLevels: Level[] = [
  {
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: hikiLevelReferences[1]
  },
  {
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: hikiLevelReferences[2]
  },
  {
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...hikiLevelReferences[1], ...hikiLevelReferences[2]]
  }
]