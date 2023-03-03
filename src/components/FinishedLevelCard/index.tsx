import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Card } from '../Card'
import { CircleProgressBar } from '../CircleProgressBar'

import styles from './style.module.scss'

export interface FinishedLevelCardRef {
  show: () => void
}

interface FinishedLevelCardProps {
  status: 'success' | 'fail'
  completionPercentage: number
}

export const FinishedLevelCard = forwardRef<FinishedLevelCardRef, FinishedLevelCardProps>(
({ status, completionPercentage}, ref) => {
  const [ showFinishedLevelCard, setShowFinishedLevelCard ] = useState(false)

  const show = () => {
    setShowFinishedLevelCard(true)
  }

  useImperativeHandle(ref, () => ({
    show
  }))

  if(!showFinishedLevelCard) return null

  return (
    <Card>
      <div className={styles.content}>
        <h1 className={styles.title}>{ status === 'success' ? 'レベルクリア' : 'ゲームオーバー'}</h1>
        <CircleProgressBar progressValue={completionPercentage} />
      </div>
    </Card>
  )
})