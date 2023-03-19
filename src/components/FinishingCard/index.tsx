import { useRouter } from 'next/router'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { stages } from '@/data/stages'

import { Card } from '../Card'
import { CircularProgress } from '../CircularProgress'

import styles from './style.module.scss'
import { Stage, StageGroup } from '@/types/stages'
import { GAME_PATH } from '@/data/app'
import { isStageGroup } from '@/utils/stage'

export interface FinishingCardRef {
  show: () => void
  close: () => void
}

interface FinishingCardProps {
  percentageResult: number
  stage: StageGroup | Stage
  chapter: string
  isEndlessMode: boolean
  title?: string
  message?: string
}


export const FinishingCard = forwardRef<FinishingCardRef, FinishingCardProps>(
({ percentageResult, stage, chapter, isEndlessMode, title, message }, ref) => {
  const router = useRouter()
  const [ showFinishingCard, setShowFinishingCard ] = useState(false)
  const isSuccessful = percentageResult > 50
  
  const currentLevelIndex = isStageGroup(stage) ? 0 : stage.levels.findIndex(level => level.chapter === chapter)
  const stageIndex = stages.findIndex(s => s.name === stage.name)

  const isLastStage = stageIndex === stages.length - 1
  const isLastLevel = isStageGroup(stage) ? true : (currentLevelIndex === stage.levels.length - 1)

  const show = () => {
    setShowFinishingCard(true)
  }

  const close = () => {
    setShowFinishingCard(false)
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
    const nextStage = stages[stageIndex + 1]
    const isNextStageGroup = 'stages' in nextStage

    if(isLastLevel) {  
      router.push({
        pathname: GAME_PATH,
        query: {
          stage: nextStage.id,
          level: isNextStageGroup ? nextStage.levelChapter : nextStage.levels[0].chapter
        }
      })
      return 
    }

    // else go to the next level in the same stage
    router.push({
      pathname: GAME_PATH,
      query: {
        stage: stage.id,
        level: (stage as Stage).levels[currentLevelIndex + 1].chapter
      }
    })
  }

  if(!showFinishingCard) return null

  return (
    <Card>
      <div className={styles.content}>
        <h1 className={styles.title}>{ isSuccessful && !isEndlessMode ? 'レベルクリア' : 'ゲームオーバー'}</h1>
        <span className={styles.ratingTitle}>{title}</span>
        {!isEndlessMode && <CircularProgress progressValue={percentageResult} />}
        <span className={styles.message}>{message}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.tryAgainBtn} onClick={tryAgain}>Try again</button>
        {isSuccessful
         && !isLastStage 
         && !isEndlessMode
         && <button className={styles.nextLevelBtn} onClick={nextLevel}>Next level</button>}
        <button className={styles.returnMenuBtn} onClick={returnToGameMenu}>Return to game menu</button>
      </div>
    </Card>
  )
})