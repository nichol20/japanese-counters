import { stages } from "@/data/stages"
import { LevelReference, LevelReferenceReading, Stage, StageGroup } from "@/types/stages"
import { selectRandomItem } from "./array"

export const isStageGroup = (stage: Stage | StageGroup): stage is StageGroup => {
  return 'stages' in stage
}

export const getStage = (id: string, stageIds?: string[]) => {
  if(id === 'endlessMode' && stageIds) {
    let customStages: Stage[] = []
    
    stageIds.forEach(stageId => {
      stages.forEach(s => {
        if(s.id === stageId && !isStageGroup(s)) customStages.push(s)
      })
    })

    return {
      id: id,
      name: 'Endless Mode',
      description: '',
      levelChapter: 'Endless Mode',
      stages: customStages
    } as StageGroup
  }

  const stage = stages.filter(s => s.id === id)[0]

  return stage ? stage : undefined
}

export const getChapter = (stage: Stage | StageGroup, chapter: any) => {
  if(isStageGroup(stage)) {
    return stage.levelChapter
  }
  // if the chapter exists in the stage return it, if not return the first chapter of the stage
  return stage.levels.filter(l => l.chapter === chapter).length > 0 ? chapter : stage.levels[0].chapter
}

export const getStageIds = (stageIdsQuery: string) => {
  let stageIds: string[] | undefined = []

  try {
    const stageidsParsed = JSON.parse(stageIdsQuery)
    stageIds = Array.isArray(stageidsParsed) ? stageidsParsed.map(id => String(id)) : undefined
  } catch (error) {
    stageIds = undefined
  }
  
  return stageIds
}

export const getReading = (reading: LevelReference['reading']): LevelReferenceReading => {
  if(Array.isArray(reading)) {
    return selectRandomItem(reading)
  }

  return reading
}