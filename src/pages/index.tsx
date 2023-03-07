import { stages } from '@/data/stages'
import { Stage, StageGroup } from '@/types/stages'
import { SingleStageDisplay, StageGroupDisplay } from '@/components'

import styles from '@/styles/Home.module.scss'
import { getLevelsPercentage } from '@/utils/localStorage'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export default function Home() {
  const levelsPercentage = useLocalStorage(getLevelsPercentage) || {}

  const renderStage = (stage: Stage | StageGroup, index: number) => {
    if ('stages' in stage) {
      return <StageGroupDisplay stage={stage} levelsPercentage={levelsPercentage} key={index} />
    } else {
      return <SingleStageDisplay stage={stage} levelsPercentage={levelsPercentage} key={index} />
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.stages}>
        {Object.values(stages).map(renderStage)}
      </div>
    </div>
  )
}
