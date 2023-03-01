import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

import styles from './style.module.scss'

interface TimerProps {
  totalTime: number
  decreaseTime: number
  onTimeout: () => void
}

export interface TimerRef {
  reset: (newTotalTime?: number) => void
  pause: () => void
}

export const Timer = forwardRef<TimerRef, TimerProps>(
({ totalTime, decreaseTime }, ref) => {
  const [ timeLeft, setTimeLeft ] = useState(totalTime)
  const [ isActive, setIsActive ] = useState(true)
  const progress = (timeLeft / totalTime) * 100

  const pause = () => {
    setIsActive(false)
  }
  
  const reset = (newTotalTime: number=totalTime) => {
    setIsActive(true)
    setTimeLeft(newTotalTime)
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined

    if(isActive) {
      timeoutId = setTimeout(() => {
        setTimeLeft(timeLeft => timeLeft - 1)
      }, decreaseTime)
    }
    
    if (timeLeft === 0) {
      clearTimeout(timeoutId)
    }
    
    return () => clearTimeout(timeoutId)
  }, [timeLeft])
  
  
  useImperativeHandle(ref, () => ({
    reset,
    pause
  }))

  return (
    <div className={styles.timer}>
      <div style={{ width: `${progress}%` }} className={styles.progressBar} />
    </div>
  )
})
