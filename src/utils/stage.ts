import { Stage, StageGroup } from "@/types/stages"

export const isStageGroup = (stage: Stage | StageGroup): stage is StageGroup => {
  return 'stages' in stage
}