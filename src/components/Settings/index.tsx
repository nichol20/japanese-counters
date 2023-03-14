import { OptionsContext } from '@/contexts/OptionsContext'
import { Options } from '@/types/localStorage'
import React, { useContext, useEffect } from 'react'

import styles from './style.module.scss'


export const Settings = () => {
  const { options, setOptions } = useContext(OptionsContext)

  const setPref = <T extends keyof Options>(option: T, value: Options[T]) => {
    setOptions(prev => ({
      ...prev,
      option: value
    }))
  }

  return (
    <div className={styles.settings}>
      <div className={styles.category}>
        <h4 className={styles.name}>Answer Type</h4>
        <div className={styles.options}>
          <div className={styles.option}>
            <input type="radio" name="answer_type" />
            Hiragana
          </div>
          <div className={styles.option}>
            <input type="radio" name="answer_type" />
            Kanji
          </div>
        </div>
      </div>
    </div>
  )
}