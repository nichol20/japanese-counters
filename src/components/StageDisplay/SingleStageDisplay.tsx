import Image from 'next/image';
import Router from 'next/router';

import { Stage } from '@/types/stages';
import { Furigana } from '@/components/Furigana';
import { GAME_PATH } from '@/data/app'
import { CircularProgress } from '../CircularProgress';
import { LevelsPercentage } from '@/types/localStorage';

import styles from './style.module.scss';

interface SingleStageDisplayProps {
  stage: Stage
  levelsPercentage: LevelsPercentage
}

export const SingleStageDisplay = ({ stage, levelsPercentage }: SingleStageDisplayProps) => {
  const handlePlayBtnClick = (chapter: string) => {
    Router.push({
      pathname: GAME_PATH,
      query: {
        stage: stage.id,
        level: chapter
      }
    })
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
            <CircularProgress progressValue={levelsPercentage[level.chapter] || 0} diameter={50} />
            <span className={styles.name}>level {level.chapter} - {level.name}</span>
            <button className={styles.playBtn} onClick={() => handlePlayBtnClick(level.chapter)} >Play</button>
          </div>
        ))}
      </div>
    </div>
  )
}