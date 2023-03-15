import { OptionsContext } from '@/contexts/OptionsContext'
import React, { useContext } from 'react'

import styles from './style.module.scss'


export const Settings = () => {
  const { options, setPref } = useContext(OptionsContext)

  return (
    <div className={styles.settings}>
      <h3>These settings will affect all games of Japanese Counter that you play.</h3>
      <div className={styles.category}>
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
        </div>
      </div>
      <div className={styles.category}>
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
        </div>
      </div>
    </div>
  )
}