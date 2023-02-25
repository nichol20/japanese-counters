import { StaticImageData } from "next/image"

export interface Stages {
  [stageName: string]: Stage | StageGroup
}

export interface StageGroup {
  id: string
  description: string
  stages: Stage[]
}

export interface Stage {
  id: string
  counter: Counter
  description: string
  instruction: string
  icons: Icon[]
  levels: Level[]
}

export interface Counter {
  kanji: string
  reading: string
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