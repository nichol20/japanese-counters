import { Level } from "@/types/stages";
import { daiLevelReferences, hikiLevelReferences, honLevelReferences, maiLevelReferences, nichiLevelReferences, tsuLevelReferences } from "./references";

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

export const daiLevels: Level[] = [
  {
    chapter: '11',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: daiLevelReferences[0],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '12',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: daiLevelReferences[1],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '13',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...daiLevelReferences[0], ...daiLevelReferences[1]],
    wrongAnswers: ['a','b','c']
  }
]

export const tsuLevels: Level[] = [
  {
    chapter: '14',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: tsuLevelReferences[0],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '15',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: tsuLevelReferences[1],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '16',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...tsuLevelReferences[0], ...tsuLevelReferences[1]],
    wrongAnswers: ['a','b','c']
  }
]

export const nichiLevels: Level[] = [
  {
    chapter: '17',
    name: '1st ~ 5th',
    description: 'This level covers 1 through 5.',
    references: nichiLevelReferences[0],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '18',
    name: '6th ~ 10th',
    description: 'This level covers 6 through 10.',
    references: nichiLevelReferences[1],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '19',
    name: '11th ~ 31st',
    description: 'This level covers 11 through 31.',
    references: nichiLevelReferences[2],
    wrongAnswers: ['a','b','c']
  },
  {
    chapter: '20',
    name: 'Review',
    description: 'This level covers 1 through 31.',
    references: [...nichiLevelReferences[0], ...nichiLevelReferences[1], ...nichiLevelReferences[2]],
    wrongAnswers: ['a','b','c']
  }
]