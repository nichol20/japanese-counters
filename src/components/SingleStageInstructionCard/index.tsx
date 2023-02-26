import { Stage } from '@/types/stages'
import Image from 'next/image'
import { forwardRef, useImperativeHandle, useState } from 'react'
import {Furigana} from '../Furigana'
import styles from './style.module.scss'

interface SingleStageInstructionCardProps {
  stage: Stage
  levelIndex: number
}

export interface SingleStageInstructionCardRef {
  show: () => void
  close: () => void
}

export const SingleStageInstructionCard = forwardRef<SingleStageInstructionCardRef, SingleStageInstructionCardProps>(
({ stage, levelIndex }, ref) => {
  const [ showInstructionCard, setShowInstructionCard ] = useState(false)

  const show = () => {
    setShowInstructionCard(true)
  }

  const close = () => {
    setShowInstructionCard(false)
  }

  useImperativeHandle(ref, () => ({
    show,
    close
  }))


  if(!showInstructionCard) return null

  return (
    <div className={styles.stageInstructionCard}>
      <div className={styles.card}>
        <div className={styles.relativeBox}>
          <div className={styles.content}>
            <div className={styles.title}>
              <Furigana kanji={stage.counter.kanji} reading={stage.counter.reading} />
            </div>
            <div className={styles.description}>{stage.description}</div>
            <ul className={styles.iconList}>
              {stage.icons.map((icon, index) => (
                <li className={styles.item} key={index}>
                  <div className={styles.iconBox}>
                    <Image src={icon.src} alt={icon.name.english} />
                  </div>
                  <span className={styles.iconDescription}>
                    {icon.name.english} ({icon.name.japanese})
                  </span>
                </li>
              ))}
            </ul>
            <span className={styles.instruction}>{stage.instruction}</span>
            <span className={styles.explanation}>
              {stage.levels[levelIndex].description}<br/>
              Please study the counters below before you begin!
            </span>
            <div className={styles.examples}>
              {stage.levels[levelIndex].references.map((reference, index) => (
                <div className={styles.example} key={index}>
                  <span className={styles.number}>{reference.number}</span>
                  <span className={styles.reading}>{reference.reading.hiragana}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.startLevelButton}>Start level</button>
            <button className={styles.returnButton} onClick={close}>Return to game menu</button>
          </div>
        </div>
      </div>
    </div>
  )
})