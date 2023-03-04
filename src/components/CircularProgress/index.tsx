import React from 'react'

import styles from './style.module.scss'

interface CircularProgressProps {
  progressValue: number
}

export const CircularProgress = ({ progressValue }: CircularProgressProps) => {
  const conicGradient = `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #353535 0deg)`

  return (
    <div className={styles.circularProgress} style={{ background: conicGradient }}>
      <span className={styles.progressValue}>{progressValue}%</span>
    </div>
  )
}