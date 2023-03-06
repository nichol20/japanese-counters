import Image from 'next/image';
import Router from 'next/router';

import { Stage } from '@/types/stages';
import {Furigana} from '@/components/Furigana';

import styles from './style.module.scss';
import { GAME_PATH } from '@/data/app'

interface SingleStageDisplayProps {
  stage: Stage
}

export const SingleStageDisplay = ({ stage }: SingleStageDisplayProps) => {

  const handlePlayBtnClick = (chapter: string) => {
    Router.push({
      pathname: GAME_PATH,
      query: {
        stage: stage.name,
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
            <span className={styles.name}>level {level.chapter} - {level.name}</span>
            <button className={styles.playBtn} onClick={() => handlePlayBtnClick(level.chapter)} >Play</button>
          </div>
        ))}
      </div>
    </div>
  )
}