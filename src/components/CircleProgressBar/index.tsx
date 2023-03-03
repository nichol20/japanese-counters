import React from 'react'

import styles from './style.module.scss'

interface CircleProgressBarProps {
  progressValue: number
}

export const CircleProgressBar = ({ progressValue }: CircleProgressBarProps) => {
  const conicGradient = `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #ededed 0deg)`

  return (
    <div className={styles.circularProgress} style={{ background: conicGradient }}>
      <span className={styles.progressValue}>{progressValue}%</span>
    </div>
  )
}