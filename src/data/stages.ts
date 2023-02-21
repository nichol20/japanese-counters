import { Stage, StageGroup, Stages } from "@/types/stages";
import { hikiIcons, honIcons, maiIcons } from "./icons";
import { hikiLevels, honLevels, maiLevels } from "./levels";


export const maiStage: Stage = {
  id: '1',
  kanji: {
    content: '枚',
    furigana: 'まい'
  },
  description: '枚/まい is a counter that is attached to a number when you are counting flat objects.',
  instruction: 'You just have to write 枚/まい after each number!',
  icons: maiIcons,
  levels: maiLevels
}

export const honStage: Stage = {
  id: '2',
  kanji: {
    content: '本',
    furigana: 'ほん'
  },
  description: '本/ほん is a counter that is attached to a number when you are counting long cylindical objects.',
  instruction: 'ほん, ぼん or ぽん is attached to each number (when written as kanji, though, it is always 本)',
  icons: honIcons,
  levels: honLevels
}

export const hikiStage: Stage = {
  id: '3',
  kanji: {
    content: '匹',
    furigana: 'ひき'
  },
  description: '匹/ひき is a counter that is attached to a number when you are counting small animals/insects.',
  instruction: 'ひき, びき or ぴき is attached to each number (when written as kanji, though, it is always 匹)',
  icons: hikiIcons,
  levels: hikiLevels
}

export const stageGroup1: StageGroup = {
  stageIds: [ maiStage.id, honStage.id, hikiStage.id ]
}

export const stages: Stages = {
  maiStage,
  honStage,
  hikiStage,
  stageGroup1
}
