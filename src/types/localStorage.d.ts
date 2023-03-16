export interface LevelsPercentage {
  [chapter: string]: number
}

export interface Options {
  answerType: 'hiragana' | 'kanji'
  howToAnswer: 'multipleChoice' | 'fillInTheBlank'
  gameSpeed: 'fast' | 'normal' | 'relaxed' | 'peaceful'
}