import { Level } from "@/types/stages";
import { nichiIcons } from "./icons";
import { chakuLevelReferences, daiLevelReferences, hikiLevelReferences, honLevelReferences, maiLevelReferences, nichiLevelReferences, ninLevelReferences, touLevelReferences, tsuLevelReferences } from "./references";

export const maiLevels: Level[] = [
  {
    chapter: '1',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: maiLevelReferences[0]
  },
  {
    chapter: '2',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: maiLevelReferences[1]
  },
  {
    chapter: '3',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...maiLevelReferences[0], ...maiLevelReferences[1]]
  }
]

export const honLevels: Level[] = [
  {
    chapter: '4',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: honLevelReferences[0]
  },
  {
    chapter: '5',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: honLevelReferences[1]
  },
  {
    chapter: '6',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...honLevelReferences[0], ...honLevelReferences[1]]
  }
]

export const hikiLevels: Level[] = [
  {
    chapter: '7',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: hikiLevelReferences[0]
  },
  {
    chapter: '8',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: hikiLevelReferences[1]
  },
  {
    chapter: '9',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...hikiLevelReferences[0], ...hikiLevelReferences[1]]
  }
]

export const daiLevels: Level[] = [
  {
    chapter: '11',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: daiLevelReferences[0]
  },
  {
    chapter: '12',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: daiLevelReferences[1]
  },
  {
    chapter: '13',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...daiLevelReferences[0], ...daiLevelReferences[1]]
  }
]

export const tsuLevels: Level[] = [
  {
    chapter: '14',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: tsuLevelReferences[0]
  },
  {
    chapter: '15',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: tsuLevelReferences[1]
  },
  {
    chapter: '16',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...tsuLevelReferences[0], ...tsuLevelReferences[1]]
  }
]

export const nichiLevels: Level[] = [
  {
    chapter: '17',
    name: '1st ~ 5th',
    description: 'This level covers 1 through 5.',
    references: nichiLevelReferences[0],
    specificInstructionIcons: [ nichiIcons[0] ]
  },
  {
    chapter: '18',
    name: '6th ~ 10th',
    description: 'This level covers 6 through 10.',
    references: nichiLevelReferences[1],
    specificInstructionIcons: [ nichiIcons[5] ]
  },
  {
    chapter: '19',
    name: '11th ~ 31st',
    description: 'This level covers 11 through 31.',
    references: nichiLevelReferences[2],
    specificInstructionIcons: [ nichiIcons[10] ]
  },
  {
    chapter: '20',
    name: 'Review',
    description: 'This level covers 1 through 31.',
    references: [...nichiLevelReferences[0], ...nichiLevelReferences[1], ...nichiLevelReferences[2]],
    specificInstructionIcons: [ nichiIcons[0] ]
  }
]

export const chakuLevels: Level[] = [
  {
    chapter: '22',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: chakuLevelReferences[0]
  },
  {
    chapter: '23',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: chakuLevelReferences[1]
  },
  {
    chapter: '24',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...chakuLevelReferences[0], ...chakuLevelReferences[1]]
  },
]

export const touLevels: Level[] = [
  {
    chapter: '25',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: touLevelReferences[0]
  },
  {
    chapter: '26',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: touLevelReferences[1]
  },
  {
    chapter: '27',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...touLevelReferences[0], ...touLevelReferences[1]]
  },
]

export const ninLevels: Level[] = [
  {
    chapter: '28',
    name: '1 ~ 5',
    description: 'This level covers 1 through 5.',
    references: ninLevelReferences[0]
  },
  {
    chapter: '29',
    name: '6 ~ 10',
    description: 'This level covers 6 through 10.',
    references: ninLevelReferences[1]
  },
  {
    chapter: '30',
    name: 'Review',
    description: 'This level covers 1 through 10.',
    references: [...ninLevelReferences[0], ...ninLevelReferences[1]]
  },
]