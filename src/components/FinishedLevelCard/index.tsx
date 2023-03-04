import { useRouter } from 'next/router'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { stages } from '@/data/stages'

import { Card } from '../Card'
import { CircularProgress } from '../CircularProgress'

import styles from './style.module.scss'
import { Stage } from '@/types/stages'
import { GAME_PATH } from '@/pages/play/japanese-counters'
import { ParsedUrlQuery } from 'querystring'

export interface FinishedLevelCardRef {
  show: () => void
}

interface FinishedLevelCardProps {
  percentageResult: number
  query: ParsedUrlQuery
}

export const FinishedLevelCard = forwardRef<FinishedLevelCardRef, FinishedLevelCardProps>(
({ percentageResult, query }, ref) => {
  const router = useRouter()
  const [ showFinishedLevelCard, setShowFinishedLevelCard ] = useState(false)
  const isSuccessful = percentageResult > 50

  const { level: chapterQuery, stage: stageQuery } = router.query
  const currentStage = stages[stageQuery as string]
  const isStageGroup = 'stages' in currentStage
  const currentLevelIndex = isStageGroup ? 0 : currentStage.levels.findIndex(level => level.chapter === chapterQuery)
  const stageKeys = Object.keys(stages)
  const stageKeyIndex = stageKeys.indexOf(stageQuery as string)
  const isLastStage = stageKeyIndex === stageKeys.length - 1
  const isLastLevel = isStageGroup ? true : (currentLevelIndex === currentStage.levels.length - 1)

  const show = () => {
    setShowFinishedLevelCard(true)
  }

  const returnToGameMenu = () => {
    router.push('/')
  }

  const tryAgain = () => {
    window.location.reload()
  }

  const nextLevel = () => {  
    if(isStageGroup) {
      const nextStage = stages[stageKeys[stageKeyIndex + 1]] as Stage
      router.push(`${GAME_PATH}?stage=${nextStage.name}&level=${nextStage.levels[0].chapter}`)
    } else {
      if(isLastLevel) {
        const nextStage = stages[stageKeys[stageKeyIndex + 1]]
        const isNextStageGroup = 'stages' in nextStage

        if(isNextStageGroup) {
          router.push(`${GAME_PATH}?stage=${nextStage.name}`)
          return 
        } else {
          router.push(`${GAME_PATH}?stage=${nextStage.name}&level=${nextStage.levels[0].chapter}`)
          return 
        }
      }

      // else go to the next level in the same stage
      router.push(`${GAME_PATH}`, {
        query: {
          stage: currentStage.name,
          level: currentStage.levels[currentLevelIndex + 1].chapter
        }
      })
    }
  }

  useImperativeHandle(ref, () => ({
    show
  }))

  if(!showFinishedLevelCard) return null

  return (
    <Card>
      <div className={styles.content}>
        <h1 className={styles.title}>{ isSuccessful ? 'レベルクリア' : 'ゲームオーバー'}</h1>
        <span className={styles.ratingTitle}>Your rating</span>
        <CircularProgress progressValue={percentageResult} />
      </div>

      <div className={styles.actions}>
        <button className={styles.tryAgainBtn} onClick={tryAgain}>Try again</button>
        {isSuccessful
         && !isLastStage 
         && <button className={styles.nextLevelBtn} onClick={nextLevel}>Next level</button>}
        <button className={styles.returnMenuBtn} onClick={returnToGameMenu}>Return to game menu</button>
      </div>
    </Card>
  )
})