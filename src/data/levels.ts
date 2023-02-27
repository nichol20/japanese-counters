import { Level } from "@/types/stages";
import { hikiLevelReferences, honLevelReferences, maiLevelReferences } from "./references";

export const maiLevels: Level[] = [
  {
    chapter: '1',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: maiLevelReferences[0],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '2',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: maiLevelReferences[1],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '3',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...maiLevelReferences[0], ...maiLevelReferences[1]],
    wrongAnswers: ['a','b','c']
  }
]

export const honLevels: Level[] = [
  {
    chapter: '4',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: honLevelReferences[0],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '5',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: honLevelReferences[1],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '6',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...honLevelReferences[0], ...honLevelReferences[1]],
    wrongAnswers: ['a','b','c']
  }
]

export const hikiLevels: Level[] = [
  {
    chapter: '7',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: hikiLevelReferences[0],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '8',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: hikiLevelReferences[1],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '9',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...hikiLevelReferences[0], ...hikiLevelReferences[1]],
    wrongAnswers: ['a','b','c']
  }
]