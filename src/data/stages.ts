import { Stage, StageGroup, Stages } from "@/types/stages";
import { hikiIcons, honIcons, maiIcons } from "./icons";
import { hikiLevels, honLevels, maiLevels } from "./levels";

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

export const stages: Stages = {
  mai,
  hon,
  hiki,
  group1
}
