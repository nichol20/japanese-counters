import { stages } from "@/data/stages"
import { LocalStorage } from "@/enums/localStorage"
import { LevelsPercentage, Options } from "@/types/localStorage"
import { isStageGroup } from "./stage"

export const populateLevelsPercentage = () => {
  let levelsPercentage: LevelsPercentage = {}

  stages.forEach(stage => {
    if(isStageGroup(stage)) {
      return levelsPercentage[stage.levelChapter] = 0
    }
    
    stage.levels.forEach(s => {
      levelsPercentage[s.chapter] = 0
    })
  })

  localStorage.setItem(LocalStorage.LEVELS_PERCENTAGE, JSON.stringify(levelsPercentage))
  return levelsPercentage
}

export const getLevelsPercentage = () => {
  const levelsPercentageItem = localStorage.getItem(LocalStorage.LEVELS_PERCENTAGE)

  if(!levelsPercentageItem) {
    return populateLevelsPercentage()
  }
  
  return JSON.parse(levelsPercentageItem) as LevelsPercentage
}

export const setLevelPercentage = (chapter: string, percentage: number) => {
  const levelsPercentage = getLevelsPercentage()

  if(levelsPercentage[chapter] && levelsPercentage[chapter] >= percentage) return

  levelsPercentage[chapter] = percentage

  localStorage.setItem(LocalStorage.LEVELS_PERCENTAGE, JSON.stringify(levelsPercentage))
}

export const populateOptions = () => {
  const options: Options = {
    answerType: 'hiragana',
    howToAnswer: 'multipleChoice',
    gameSpeed: 'normal'
  }

  localStorage.setItem(LocalStorage.OPTIONS, JSON.stringify(options))

  return options
}

export const getOptions = () => {
  const optionsItem = localStorage.getItem(LocalStorage.OPTIONS)

  if(!optionsItem) {
    return populateOptions()
  }

  return JSON.parse(optionsItem) as Options
}

export const setOptions = (newOptions: Partial<Options>) => {
  let options = getOptions()

  options = {
    ...options,
    ...newOptions
  }

  localStorage.setItem(LocalStorage.OPTIONS, JSON.stringify(options))
}