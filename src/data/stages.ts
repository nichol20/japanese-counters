import { Stage, StageGroup, Stages } from "@/types/stages";
import { chakuIcons, daiIcons, funIcons, haiIcons, hikiIcons, honIcons, koIcons, maiIcons, nichiIcons, ninIcons, touIcons, tsuIcons } from "./icons";
import { chakuLevels, daiLevels, funLevels, haiLevels, hikiLevels, honLevels, koLevels, maiLevels, nichiLevels, ninLevels, touLevels, tsuLevels } from "./levels";

export const mai: Stage = {
  id: '1',
  name: 'mai',
  counter: {
    kanji: '枚',
    reading: 'まい'
  },
  description: '枚/まい is a counter that is attached to a number when you are counting flat objects.',
  instruction: 'You just have to write 枚/まい after each number!',
  icons: maiIcons,
  levels: maiLevels
}

export const hon: Stage = {
  id: '2',
  name: 'hon',
  counter: {
    kanji: '本',
    reading: 'ほん'
  },
  description: '本/ほん is a counter that is attached to a number when you are counting long cylindical objects.',
  instruction: 'ほん, ぼん or ぽん is attached to each number (when written as kanji, though, it is always 本)',
  icons: honIcons,
  levels: honLevels
}

export const hiki: Stage = {
  id: '3',
  name: 'hiki',
  counter: {
    kanji: '匹',
    reading: 'ひき'
  },
  description: '匹/ひき is a counter that is attached to a number when you are counting small animals/insects.',
  instruction: 'ひき, びき or ぴき is attached to each number (when written as kanji, though, it is always 匹)',
  icons: hikiIcons,
  levels: hikiLevels
}

export const group1: StageGroup = {
  id: 'stageGroup1',
  name: 'group1',
  description: "When you're ready, let's see if you can remember which counter goes with which thing!",
  stages: [ mai, hon, hiki ],
  levelChapter: '10'
}

export const dai: Stage = {
  id: '4',
  name: 'dai',
  counter: {
    kanji: '台',
    reading: 'だい'
  },
  description: "台/だい is a counter that is attached to a number when you are counting machines, devices, and vehicles.",
  instruction: "You just have to write 台/だい after each number!",
  icons: daiIcons,
  levels: daiLevels
}

export const tsu: Stage = {
  id: '5',
  name: 'tsu',
  counter: {
    kanji: '',
    reading: 'つ'
  },
  description: "つ is a generic counter that is attached to a number when you are counting things. It only goes up to 10.",
  instruction: "There is not a general rule for these, so please memorize each one.",
  icons: tsuIcons,
  levels: tsuLevels
}

export const nichi: Stage = {
  id: '6',
  name: 'nichi',
  counter: {
    kanji: '日',
    reading: 'にち'
  },
  description: "日/にち is a counter that is attached to the days of the month. This is a special counter, as many of the numbers do not have a standard suffix that is used.",
  instruction: "1st through 10th, 14th, 19th, 20th, and 24th all have special readings. The remaining dates are the normal number plus 日/にち.",
  icons: nichiIcons,
  levels: nichiLevels
}

export const group2: StageGroup = {
  id: 'stageGroup2',
  name: 'group2',
  description: "When you're ready, let's see if you can remember which counter goes with which thing!",
  stages: [ dai, tsu, nichi ],
  levelChapter: '21'
}

export const chaku: Stage = {
  id: '7',
  name: 'chaku',
  counter: {
    kanji: '着',
    reading: 'ちゃく',
  },
  description: '着/ちゃく is a counter that is attached to a number when you are counting suits or sets of clothing.',
  instruction: 'ちゃく is attached to each number (when written as kanji, though, it is always 着).',
  icons: chakuIcons,
  levels: chakuLevels
}

export const tou: Stage = {
  id: '8',
  name: 'tou',
  counter: {
    kanji: '頭',
    reading: 'とう'
  },
  description: '頭/とう is a counter that is attached to a number when you are counting large animals.',
  instruction: 'とう is attached to each number (when written as kanji, though, it is always 頭).',
  icons: touIcons,
  levels: touLevels
}

export const nin: Stage = {
  id: '9',
  name: 'nin',
  counter: {
    kanji: '人',
    reading: 'にん'
  },
  description: '人/にん is a counter that is attached to a number when you are counting people.',
  instruction: 'For three and up, にん (人) is attached to the number. One is ひとり (一人) and two is ふたり (二人), though.',
  icons: ninIcons,
  levels: ninLevels
}

export const group3: StageGroup = {
  id: 'stageGroup3',
  name: 'group3',
  description: "When you're ready, let's see if you can remember which counter goes with which thing!",
  stages: [chaku, tou, nin],
  levelChapter: '31'
}

export const hai: Stage = {
  id: '10',
  name: 'hai',
  counter: {
    kanji: "杯",
    reading: "はい"
  },
  description: "杯/はい is a counter that is attached to a number when you are counting cups of drinks. This includes bowls of soup, and oddly enough, squid/octopuses.",
  instruction: "はい, ばい, or ぱい is attached to each number (when written as kanji, though, it is always 杯).",
  icons: haiIcons,
  levels: haiLevels
}

// developing
export const fun: Stage = {
  id: '11',
  name: 'fun',
  counter: {
    kanji: "分",
    reading: "ふん"
  },
  description: "分/ふん is a counter that is attached to a number when you are counting minutes (time).",
  instruction: "ふん, ぶん, or ふん is attached to each number (when written as kanji, though, it is always 分).",
  icons: funIcons,
  levels: funLevels
}

export const ko: Stage = {
  id: '12',
  name: 'ko',
  counter: {
    kanji: '個',
    reading: 'こ'
  },
  description: "個/こ is a generic counter that is attached to a number for counting things (often small objects).",
  instruction: "こ is attached to each number (when written as kanji, though, it is always 個).",
  icons: koIcons,
  levels: koLevels
}

export const group4: StageGroup = {
  id: 'stageGroup4',
  name: 'group4',
  description: "When you're ready, let's see if you can remember which counter goes with which thing!",
  stages: [hai, fun, ko],
  levelChapter: '41'
}

export const stages: Stages = [
  mai,
  hon,
  hiki,
  group1,
  dai,
  tsu,
  nichi,
  group2,
  chaku,
  tou,
  nin,
  group3
]
