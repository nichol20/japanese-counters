import { Stage, StageGroup } from "@/types/stages";
import Router from "next/router";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Card } from "../Card";
import { Furigana } from "../Furigana";

import styles from './style.module.scss'

interface StageGroupInstructionCardProps {
  stage: StageGroup
  isEndlessMode: boolean
  onStart: () => void
  isPause: boolean
  onUnpause: () => void
}

export interface StageGroupInstructionCardRef {
  show: () => void
  close: () => void
}

export const StageGroupInstructionCard = forwardRef<StageGroupInstructionCardRef, StageGroupInstructionCardProps>(
({ stage, isEndlessMode, onStart, isPause, onUnpause }, ref) => {
  const [ showInstructionCard, setShowInstructionCard ] = useState(false)

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

  const toggleReview = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const listElement = (event.currentTarget.parentElement?.children[2] as HTMLDivElement)

    listElement.classList.toggle(styles.active)
  }

  useImperativeHandle(ref, () => ({
    show,
    close
  }))

  if(!showInstructionCard) return null

  return (
    <Card>
      <div className={styles.content}>
      <h2 className={styles.title}>{isEndlessMode ? 'Endless Mode' : `Level ${stage.levelChapter}` }</h2>
        <span className={styles.explanation}>
          Questions will cover the counters below! Hit the buttons if you need a refresher on the spelling
        </span>
        <div className={styles.stages}>
          {stage.stages.map(({ counter, description, instruction, levels }, index) => (
            <div className={styles.stage} key={index}>
              <div className={styles.counter}>
                <Furigana kanji={counter.kanji} reading={counter.reading} />
              </div>
              <div className={styles.information}>
                <span className={styles.description}>
                  {description}
                </span>
                <button className={styles.reviewButton} onClick={toggleReview}>Review this</button>
                <div className={styles.review}>
                  <span className={styles.reviewInstruction}>
                    {instruction}
                  </span>
                  <div className={styles.examples}>
                    {levels[2].references.map((reference, index) => (
                      <div className={styles.example} key={index}>
                        <span className={styles.number}>{reference.number.japanese}</span>
                        <span className={styles.reading}>{Array.isArray(reference.reading) ? reference.reading[0].hiragana : reference.reading.hiragana}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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