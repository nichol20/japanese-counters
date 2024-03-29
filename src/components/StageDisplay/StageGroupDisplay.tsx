import Image from 'next/image';
import Router from 'next/router';
import { useEffect, useState } from 'react';

import { Icon, Stage, StageGroup } from '@/types/stages';
import {Furigana} from '@/components/Furigana';
import { GAME_PATH } from '@/data/app'
import { selectRandomItem } from '@/utils/array';
import { CircularProgress } from '../CircularProgress';
import { LevelsPercentage } from '@/types/localStorage';

import styles from './style.module.scss';

interface StageGroupDisplayProps {
  stage: StageGroup
  levelsPercentage: LevelsPercentage
}


export const StageGroupDisplay = ({ stage, levelsPercentage }: StageGroupDisplayProps) => {
  const [ icons, setIcons ] = useState<Icon[]>([])

  const handlePlayBtnClick = () => {
    Router.push({
      pathname: GAME_PATH,
      query: {
        stage: stage.id
      }
    })
  }

  useEffect(() => {
    const stages: Stage[] = stage.stages
    const selectedIcons: Icon[] = []

    // Select one random item from each list
    stages.forEach(({ icons: iconList }) => {
      const randomIcon = selectRandomItem(iconList)
      selectedIcons.push(randomIcon)
    })

    // Select the remaining random items
    while (selectedIcons.length < 5) {
      const randomStage = selectRandomItem(stages)
      const randomIcon = selectRandomItem(randomStage.icons)

      if (!selectedIcons.includes(randomIcon)) {
        selectedIcons.push(randomIcon)
      }
    }

    setIcons(selectedIcons)
  }, [stage])

  return (
    <div className={styles.stageDisplay}>
      <div className={styles.title}>
        {stage.stages.map(({ counter }, index) => (
          <Furigana kanji={counter.kanji} reading={counter.reading} key={index} />
        ))}
      </div>
      <div className={styles.stageDisplay}>
        <ul className={styles.iconList}>
          {icons.map((icon, index) => (
            <li className={styles.item} key={index}>
              <Image src={icon.src} alt={icon.name.english} />
            </li>
          ))}
        </ul>
        <div className={styles.description}>{stage.description}</div>
        <div className={styles.levels}>
          <div className={styles.level}>
            <CircularProgress progressValue={levelsPercentage[stage.levelChapter] || 0} diameter={50} />
            <span className={styles.name}>level {stage.levelChapter} - Mixed review</span>
            <button className={styles.playBtn} onClick={handlePlayBtnClick} >Play</button>
          </div>
        </div>
      </div>
    </div>
  )
}
