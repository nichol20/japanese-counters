import Image from 'next/image';

import { Stage } from '@/types/stages';
import {Furigana} from '@/components/Furigana';

import styles from './style.module.scss';
import { useRef, useState } from 'react';
import { SingleStageInstructionCard, SingleStageInstructionCardRef } from '../SingleStageInstructionCard';

interface SingleStageDisplayProps {
  stage: Stage
}

export const SingleStageDisplay = ({ stage }: SingleStageDisplayProps) => {
  const [ currentLevelIndex, setCurrentLevelIndex ] = useState(0)
  const stageInstructionCardRef = useRef<SingleStageInstructionCardRef>(null)

  const handlePlayBtnClick = (index: number) => {
    setCurrentLevelIndex(index)
    if(stageInstructionCardRef.current) stageInstructionCardRef.current.show()
  }
  
  return (
    <div className={styles.stageDisplay}>
      <div className={styles.title}>
        <Furigana kanji={stage.counter.kanji} reading={stage.counter.reading} />
      </div>
      <ul className={styles.iconList}>
        {stage.icons.slice(0, 5).map((icon, index) => (
          <li className={styles.item} key={index}>
            <Image src={icon.src} alt={icon.name.english} />
          </li>
        ))}
      </ul>
      <div className={styles.description}>{stage.description}</div>
      <div className={styles.levels}>
        {stage.levels.map((level, index) => (
          <div className={styles.level} key={index}>
            <span className={styles.name}>Level {index+1} - {level.name}</span>
            <button className={styles.playBtn} onClick={() => handlePlayBtnClick(index)} >Play</button>
          </div>
        ))}
      </div>
      <SingleStageInstructionCard ref={stageInstructionCardRef} stage={stage} levelIndex={currentLevelIndex} />
    </div>
  )
}