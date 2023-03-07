import React, { useEffect } from 'react'

import styles from './style.module.scss'

interface CircularProgressProps {
  progressValue: number
  diameter?: number
}

export const CircularProgress = ({ progressValue, diameter=140 }: CircularProgressProps) => {
  const conicGradient = `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #353535 0deg)`
  const borderWidth = `${(diameter * 0.03).toFixed(3)}px`
  const fontSize = `${(diameter * 0.014).toFixed(3)}em`

  useEffect(() => {
    document.querySelectorAll(`.${styles.circularProgress}`).forEach(el => {
      (el as HTMLDivElement).style.setProperty('--border-width', borderWidth)
    })
  }, [])

  return (
    <div
     className={styles.circularProgress} 
     style={{ background: conicGradient, width: diameter, height: diameter }}
    >
      <span className={styles.progressValue} style={{ fontSize }}>{progressValue}%</span>
    </div>
  )
}