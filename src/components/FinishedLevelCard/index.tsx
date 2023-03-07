import { useRouter } from 'next/router'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { stages } from '@/data/stages'

import { Card } from '../Card'
import { CircularProgress } from '../CircularProgress'

import styles from './style.module.scss'
import { Stage, StageGroup } from '@/types/stages'
import { GAME_PATH } from '@/data/app'
import { ParsedUrlQuery } from 'querystring'

export interface FinishedLevelCardRef {
  show: () => void
  close: () => void
}

interface FinishedLevelCardProps {
  percentageResult: number
  stage: StageGroup | Stage
  chapter: string
}


export const FinishedLevelCard = forwardRef<FinishedLevelCardRef, FinishedLevelCardProps>(
({ percentageResult, stage, chapter }, ref) => {
  const router = useRouter()
  const [ showFinishedLevelCard, setShowFinishedLevelCard ] = useState(false)
  const isSuccessful = percentageResult > 50
  const isStageGroup = 'stages' in stage
  
  const currentLevelIndex = isStageGroup ? 0 : stage.levels.findIndex(level => level.chapter === chapter)
  const stageKeys = Object.keys(stages)
  const stageKeyIndex = stageKeys.indexOf(stage.name)

  const isLastStage = stageKeyIndex === stageKeys.length - 1
  const isLastLevel = isStageGroup ? true : (currentLevelIndex === stage.levels.length - 1)

  const show = () => {
    setShowFinishedLevelCard(true)
  }

  const close = () => {
    setShowFinishedLevelCard(false)
  }

  useImperativeHandle(ref, () => ({
    show,
    close
  }))

  const returnToGameMenu = () => {
    router.push('/')
  }

  const tryAgain = () => {
    window.location.reload()
  }

  const nextLevel = () => {
    const nextStage = stages[stageKeys[stageKeyIndex + 1]]
    const isNextStageGroup = 'stages' in nextStage

    if(isLastLevel) {  
      router.push({
        pathname: GAME_PATH,
        query: {
          stage: nextStage.name,
          level: isNextStageGroup ? nextStage.levelChapter : nextStage.levels[0].chapter
        }
      })
      return 
    }

    // else go to the next level in the same stage
    router.push({
      pathname: GAME_PATH,
      query: {
        stage: stage.name,
        level: (stage as Stage).levels[currentLevelIndex + 1].chapter
      }
    })
  }

  if(!showFinishedLevelCard) return null

  return (
    <Card>
      <div className={styles.content}>
        <h1 className={styles.title}>{ isSuccessful ? 'レベルクリア' : 'ゲームオーバー'}</h1>
        <span className={styles.ratingTitle}></span>
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