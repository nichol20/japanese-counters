import Image from 'next/image';

import { Icon, Stage, StageGroup } from '@/types/stages';
import {Furigana} from '@/components/Furigana';

import styles from './style.module.scss';
import { useEffect, useRef, useState } from 'react';
import { StageGroupInstructionCard, StageGroupInstructionCardRef } from '../StageGroupInstructionCard';

interface StageGroupDisplayProps {
  stage: StageGroup
}


export const StageGroupDisplay = ({ stage }: StageGroupDisplayProps) => {
  const [ icons, setIcons ] = useState<Icon[]>([])
  const stageInstructionCardRef = useRef<StageGroupInstructionCardRef>(null)

  const handlePlayBtnClick = () => {
    if(stageInstructionCardRef.current) stageInstructionCardRef.current.show()
  }

  useEffect(() => {
    const selectRandomIcon = (iconList: Icon[]) => {
      return iconList[Math.floor(Math.random() * iconList.length)]
    }

    const stages: Stage[] = stage.stages
    const selectedIcons: Icon[] = []

    // Select one random item from each list
    stages.forEach(({ icons: iconList }) => {
      const randomIcon = selectRandomIcon(iconList)
      selectedIcons.push(randomIcon)
    })

    // Select the remaining random items
    while (selectedIcons.length < 5) {
      const randomStage = stages[Math.floor(Math.random() * stages.length)]
      const randomIcon = selectRandomIcon(randomStage.icons)

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
            <span className={styles.name}>{stage.levelChapter} - Mixed review</span>
            <button className={styles.playBtn} onClick={handlePlayBtnClick} >Play</button>
          </div>
        </div>
      </div>
      <StageGroupInstructionCard stage={stage} ref={stageInstructionCardRef} />
    </div>
  )
}
