import { StaticImageData } from "next/image"

export interface Stages {
  [stageName: string]: Stage | StageGroup
}

export interface StageGroup {
  id:           string
  name:         string
  description:  string
  stages:       Stage[]
  levelChapter: string
}

export interface Stage {
  id:                   string
  name:                 string
  counter:              Counter
  description:          string
  instruction:          string
  icons:                Icon[]
  levels:               Level[]
}

export interface Counter {
  kanji:   string
  reading: string
}

export interface Level {
  chapter:                    string
  name:                       string
  references:                 LevelReference[]
  description:                string
  specificInstructionIcons?:  Icon[]
}

export interface LevelReference {
  number:         LevelReferenceNumber
  reading:        LevelReferenceReading
  wrongAnswers:   string[]
  specificIcons:  Icon[]
}

export interface LevelReferenceNumber {
  actual:        number
  english:       string
  japanese:      string
  icons:         number
}

export interface LevelReferenceReading {
  kanji:    string
  hiragana: string
}

export interface Icon {
  src:  StaticImageData
  name: IconName
}

export interface IconName {
  english:  string
  japanese: string
}