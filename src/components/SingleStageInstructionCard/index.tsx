import { Stage } from '@/types/stages'
import Image from 'next/image'
import Router from 'next/router'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { Card } from '../Card'
import {Furigana} from '../Furigana'
import styles from './style.module.scss'

interface SingleStageInstructionCardProps {
  stage: Stage
  chapter: string
  onStart: () => void
  isPause: boolean
  onUnpause: () => void
}

export interface SingleStageInstructionCardRef {
  show: () => void
  close: () => void
}

export const SingleStageInstructionCard = forwardRef<SingleStageInstructionCardRef, SingleStageInstructionCardProps>(
({ stage, chapter, onStart, isPause, onUnpause }, ref) => {
  const [ showInstructionCard, setShowInstructionCard ] = useState(false)
  const level = stage.levels.filter(s => s.chapter === chapter)[0]
  const icons = level.specificInstructionIcons ? level.specificInstructionIcons : stage.icons

  const show = () => {
    setShowInstructionCard(true)
  }

  const close = () => {
    setShowInstructionCard(false)
  }

  const returnToGameMenu = () => {
    Router.push('/')
  }

  const tryAgain = () => {
    window.location.reload()
  }

  const handleStartClick = () => {
    onStart()
  }

  const handleUnpauseClick = () => {
    onUnpause()
  }

  useImperativeHandle(ref, () => ({
    show,
    close
  }))


  if(!showInstructionCard) return null

  return (
    <Card>
      <div className={styles.content}>
        <h2 className={styles.title}>Level {chapter}</h2>
        <Furigana kanji={stage.counter.kanji} reading={stage.counter.reading} />
        <div className={styles.description}>{stage.description}</div>
        <ul className={styles.iconList}>
          {icons.map((icon, index) => (
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
          {level.description}<br/>
          Please study the counters below before you begin!
        </span>
        <div className={styles.examples}>
          {level.references.map((reference, index) => (
            <div className={styles.example} key={index}>
              <span className={styles.number}>{reference.number.japanese}</span>
              <span className={styles.reading}>{
                Array.isArray(reference.reading) ? reference.reading[0].hiragana : reference.reading.hiragana
              }</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.actions}>
        {isPause && (
          <>
            <button className={styles.unpauseButton} onClick={handleUnpauseClick}>unpause</button>
            <button className={styles.startOverAgainButton} onClick={tryAgain}>Start over again</button>
          </>
        )}
        {!isPause && 
        <button className={styles.startLevelButton} onClick={handleStartClick}>Start the level</button>}

        <button className={styles.returnButton} onClick={returnToGameMenu}>Return to game menu</button>
      </div>
    </Card>
  )
})