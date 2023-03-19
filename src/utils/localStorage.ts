import { DEFAULT_OPTIONS } from "@/data/app"
import { stages } from "@/data/stages"
import { LocalStorage } from "@/enums/localStorage"
import { LevelsPercentage, Options } from "@/types/localStorage"
import { hasAllProperties } from "./object"
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

  if(levelsPercentage[chapter] && levelsPercentage[chapter] >= percentage) {
    
    if(levelsPercentage[chapter] > 100) {
      levelsPercentage[chapter] = 100
      localStorage.setItem(LocalStorage.LEVELS_PERCENTAGE, JSON.stringify(levelsPercentage))
    }
    return
  }

  levelsPercentage[chapter] = percentage

  localStorage.setItem(LocalStorage.LEVELS_PERCENTAGE, JSON.stringify(levelsPercentage))
}

export const populateOptions = () => {
  const options = DEFAULT_OPTIONS

  localStorage.setItem(LocalStorage.OPTIONS, JSON.stringify(options))

  return options
}

export const getOptions = () => {
  const optionsItem = localStorage.getItem(LocalStorage.OPTIONS)

  if(!optionsItem) {
    return populateOptions()
  }
  
  const options: Options = JSON.parse(optionsItem)

  if(!hasAllProperties(options, ['answerType', 'gameSpeed', 'howToAnswer'])) {
    deleteOptions()
    return populateOptions()
  }

  return options
}

export const setOptions = (newOptions: Partial<Options>) => {
  let options = getOptions()

  options = {
    ...options,
    ...newOptions
  }

  localStorage.setItem(LocalStorage.OPTIONS, JSON.stringify(options))
}

const deleteOptions = () => {
  localStorage.removeItem(LocalStorage.OPTIONS)
}

export const getBestScore = () => {
  const bestScoreItem = localStorage.getItem(LocalStorage.BEST_SCORE)

  if(!bestScoreItem) return 0

  const bestScore = parseInt(bestScoreItem)

  if(isNaN(bestScore)) {
    localStorage.setItem(LocalStorage.BEST_SCORE, '0')
    return 0
  }

  return bestScore
}

export const setBestScore = (score: number) => {
  const bestScore = getBestScore()

  if(score > bestScore) localStorage.setItem(LocalStorage.BEST_SCORE, String(score))
}