import { OptionsContext } from '@/contexts/OptionsContext'
import React, { useContext } from 'react'

import styles from './style.module.scss'


export const Settings = () => {
  const { options, setPref } = useContext(OptionsContext)

  return (
    <div className={styles.settings}>
      <h3>These settings will affect all games of Japanese Counter that you play.</h3>
      <div className={styles.grid}>
        
        <h4 className={styles.name}>Game Speed</h4>
        <div className={styles.options}>
          <div className={styles.option}>
            <input
             type="radio" 
             name="game_speed" 
             defaultChecked={options.gameSpeed === 'fast'} 
             onClick={() => setPref('gameSpeed', 'fast')}
            />
            Fast (30% less time)
          </div>
          <div className={styles.option}>
            <input
             type="radio" 
             name="game_speed" 
             defaultChecked={options.gameSpeed === 'normal'} 
             onClick={() => setPref('gameSpeed', 'normal')}
            />
            Normal
          </div>
          <div className={styles.option}>
            <input
             type="radio" 
             name="game_speed" 
             defaultChecked={options.gameSpeed === 'relaxed'} 
             onClick={() => setPref('gameSpeed', 'relaxed')}
            />
            Relaxed (50% more time)
          </div>
          <div className={styles.option}>
            <input
             type="radio" 
             name="game_speed" 
             defaultChecked={options.gameSpeed === 'peaceful'} 
             onClick={() => setPref('gameSpeed', 'peaceful')}
            />
            Peaceful (no timer)
          </div> 
        </div>
      
        <h4 className={styles.name}>Answer Type</h4>
        <div className={styles.options}>
          <div className={styles.option}>
            <input
             type="radio" 
             name="answer_type" 
             defaultChecked={options.answerType === 'hiragana'} 
             onClick={() => setPref('answerType', 'hiragana')}
            />
            Hiragana
          </div>
          <div className={styles.option}>
            <input
             type="radio" 
             name="answer_type" 
             defaultChecked={options.answerType === 'kanji'} 
             onClick={() => setPref('answerType', 'kanji')}
            />
            Kanji
          </div>
          <span className={styles.description}>Kanji answers can only appear in endless mode and review (boss) rounds where there are multiple counters to choose from.</span>
        </div>
      
        <h4 className={styles.name}>How to answer</h4>
        <div className={styles.options}>
          <div className={styles.option}>
            <input
             type="radio" 
             name="how_to_answer" 
             defaultChecked={options.howToAnswer === 'multipleChoice'} 
             onClick={() => setPref('howToAnswer', 'multipleChoice')}
            />
            Multiple choice
          </div>
          <div className={styles.option}>
            <input
             type="radio" 
             name="how_to_answer" 
             defaultChecked={options.howToAnswer === 'fillInTheBlank'} 
             onClick={() => setPref('howToAnswer', 'fillInTheBlank')}
            />
            Fill in the blank
          </div>
          <span className={styles.description}>Fill in the blank answers will have a 30% time boost.</span>
        </div>
      </div>
    </div>
  )
}