import { StaticImageData } from "next/image"

export interface Stages {
  [stageName: string]: Stage | StageGroup
}

export interface StageGroup {
  stageIds: string[]
}

export interface Stage {
  id: string
  kanji: Kanji
  description: string
  instruction: string
  icons: Icon[]
  levels: Level[]
}

export interface Kanji {
  content: string
  furigana: string
}

export interface Level {
  name: string
  references: LevelReference[]
  description: string
}

export interface LevelReference {
  number: string
  reading: LevelReferenceReading
}

export interface LevelReferenceReading {
  kanji: string
  hiragana: string
}

export interface Icon {
  src: StaticImageData
  name: IconName
}

export interface IconName {
  english: string
  japanese: string
}