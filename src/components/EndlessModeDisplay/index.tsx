import { GAME_PATH } from '@/data/app'
import { stages } from '@/data/stages'
import { Stage, StageGroup } from '@/types/stages'
import { isStageGroup } from '@/utils/stage'
import Router from 'next/router'
import React, { useState } from 'react'

import styles from './style.module.scss'

export const EndlessModeDisplay = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>([...stages.map(s => {
    if(isStageGroup(s)) return ''
    else return s.id
  }).filter(id => id !== '')])

  const handlePlayBtnClick = () => {
    Router.push(`${GAME_PATH}?stage=endlessMode&stageIds=${JSON.stringify(checkedIds)}`)
  }

  const handleInputChange = (id: string, isChecked: boolean) => {
    if(isChecked && !checkedIds.includes(id)) {
      setCheckedIds(prev => [...prev, id])
    } else {
      setCheckedIds(prev => prev.filter(p => p !== id))
    }
  }

  const renderCounters = (stage: Stage | StageGroup, index: number) => {
    if('stages' in stage) return

    return (
      <div className={styles.counterBox} key={index}>
        <input
         type="checkbox" 
         className={styles.checkbox} 
         checked={checkedIds.includes(stage.id)}
         onChange={e => handleInputChange(stage.id, e.target.checked)}
        />
        {stage.counter.kanji ? `${stage.counter.kanji}/` : ''}{stage.counter.reading}
      </div>
    )
  }

  return (
    <div className={styles.endlessModeDisplay}>
      <h3>How long can you last? The monsters grow stronger and faster with each level!</h3>
      <button className={styles.startBtn} onClick={handlePlayBtnClick}>
        Begin endless mode
      </button>

      <h4>counters to include</h4>
      <div className={styles.counters}>
        {stages.map(renderCounters)}
      </div>
    </div>
  )
}
