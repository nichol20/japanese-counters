import { hourglassesIcon } from '@/assets';
import Image from 'next/image';
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
  start: () => void
}

export const Timer = forwardRef<TimerRef, TimerProps>(
({ totalTime, decreaseTime, onTimeout }, ref) => {
  const [ timeLeft, setTimeLeft ] = useState(totalTime)
  const [ isActive, setIsActive ] = useState(false)
  const progress = (timeLeft / totalTime) * 100

  const pause = () => {
    setIsActive(false)
  }

  const start = () => {
    setIsActive(true)
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
      onTimeout()
    }
    
    return () => clearTimeout(timeoutId)
  }, [timeLeft, isActive])
  
  
  useImperativeHandle(ref, () => ({
    reset,
    pause,
    start
  }))

  return (
    <div className={styles.timer}>
      <Image src={hourglassesIcon} alt="hourglasses" className={styles.icon} />
      <div className={styles.bar}>
        <div className={styles.backgroundBar} />
        <div style={{ width: `${progress}%` }} className={styles.progressBar} />
      </div>
    </div>
  )
})
