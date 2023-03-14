import { stages } from '@/data/stages'
import { Stage, StageGroup } from '@/types/stages'
import { Settings, SingleStageDisplay, StageGroupDisplay } from '@/components'

import styles from '@/styles/Home.module.scss'
import { getLevelsPercentage } from '@/utils/localStorage'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useState } from 'react'
import Image from 'next/image'
import { cogwheelIcon, endlessIcon, gamepadIcon } from '@/assets'

export default function Home() {
  const levelsPercentage = useLocalStorage(getLevelsPercentage) || {}
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  const renderStage = (stage: Stage | StageGroup, index: number) => {
    if ('stages' in stage) {
      return <StageGroupDisplay stage={stage} levelsPercentage={levelsPercentage} key={index} />
    } else {
      return <SingleStageDisplay stage={stage} levelsPercentage={levelsPercentage} key={index} />
    }
  }

  return (
    <div className={styles.app}>
      <ul className={styles.tabList}>
        <li
         className={`${styles.tabItem} ${activeTab === 0 ? styles.active : ''}`} 
         onClick={() => handleTabClick(0)}
        >
          <div className={styles.iconBox}>
            <Image src={gamepadIcon} alt="gamepad" className={styles.icon} />
          </div>
          <span className={styles.tabName}>Levels</span>
        </li>
        <li 
         className={`${styles.tabItem} ${activeTab === 1 ? styles.active : ''}`} 
         onClick={() => handleTabClick(1)}
        >
          <div className={styles.iconBox}>
            <Image src={endlessIcon} alt="endless" className={styles.icon} />
          </div>
          <span className={styles.tabName}>Endless mode</span>
        </li>
        <li
         className={`${styles.tabItem} ${activeTab === 2 ? styles.active : ''}`} 
         onClick={() => handleTabClick(2)}
        >
          <div className={styles.iconBox}>
            <Image src={cogwheelIcon} alt="cogwheel" className={styles.icon} />
          </div>
          <span className={styles.tabName}>Settings</span>
        </li>
      </ul>
      {activeTab === 0 && <div className={styles.stages}>
        {Object.values(stages).map(renderStage)}
      </div>}
      {activeTab === 2 && <Settings />}
    </div>
  )
}
