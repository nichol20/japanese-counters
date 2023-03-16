import { stages } from '@/data/stages'
import { Stage, StageGroup } from '@/types/stages'
import React from 'react'

import styles from './style.module.scss'

export const EndlessModeDisplay = () => {

  const renderCounters = (stage: Stage | StageGroup, index: number) => {
    if('stages' in stage) return

    return (
      <div className={styles.counterBox} key={index}>
        <input type="checkbox" className={styles.checkbox} name="" id="" />
        {stage.counter.kanji}/{stage.counter.reading}
      </div>
    )
  }

  return (
    <div className={styles.endlessModeDisplay}>
      <h3>How long can you last? The monsters grow stronger and faster with each level!</h3>
      <button className={styles.startBtn}>
        Begin endless mode
      </button>

      <h4>counters to include</h4>
      <div className={styles.counters}>
        {Object.values(stages).map(renderCounters)}
      </div>
    </div>
  )
}
