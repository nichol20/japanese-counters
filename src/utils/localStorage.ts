import { stages } from "@/data/stages"
import { isStageGroup } from "./stage"

export interface LevelsPercentage {
  [chapter: string]: number
}

enum LocalStorage {
  LEVELS_PERCENTAGE = 'levelsPercentage'
}

export const populateStorage = () => {
  let levelsPercentage: LevelsPercentage = {}

  Object.values(stages).forEach(stage => {
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
    return populateStorage()
  }
  
  const levelsPercentage = JSON.parse(levelsPercentageItem)
  return (levelsPercentage as LevelsPercentage)
}

export const setLevelPercentage = (chapter: string, percentage: number) => {
  const levelsPercentage = getLevelsPercentage()

  if(levelsPercentage[chapter] && levelsPercentage[chapter] >= percentage) return

  levelsPercentage[chapter] = percentage

  localStorage.setItem(LocalStorage.LEVELS_PERCENTAGE, JSON.stringify(levelsPercentage))
}