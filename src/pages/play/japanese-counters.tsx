import { useRouter } from "next/router"
import { stages } from "@/data/stages"
import { useEffect, useRef, useState } from "react"
import { Icon, Level, LevelReference } from "@/types/stages"
import { selectRandomItem, shuffleArray } from "@/utils/functions"

import styles from '../../styles/Game.module.scss'
import Image from "next/image"
import { Timer, TimerRef } from "@/components/Timer"

const defaultChapter = '1'
const defaultStage = 'mai'

export default function JapaneseCounters() {
  const router = useRouter()
  const { level: chapterQuery, stage: stageQuery } = router.query
  const chapter = typeof(chapterQuery) === 'string' ? chapterQuery : defaultChapter
  const stage = typeof(stageQuery) === 'string' ? stages[stageQuery] : stages[defaultStage]
  const isStageGroup = 'stages' in stage
  const [ currentIcon, setCurrentIcon ] = useState<Icon>()
  const [ currentReference, setCurrentReference ] = useState<LevelReference>()
  const [ answers, setAnswers ] = useState<string[]>([])
  const [ selectedAnswer, setSelectedAnswer ] = useState<string | null>(null);
  const [ answerStyleList, setAnswerStyleList ] = useState([ styles.answerStyle1, styles.answerStyle2, styles.answerStyle3, styles.answerStyle4 ])
  const timerRef = useRef<TimerRef>(null)

  if(!stage) return null

  const generateRandomIcon = () => {
    if(isStageGroup) {
      const randomStage = selectRandomItem(stage.stages)
      setCurrentIcon(selectRandomItem(randomStage.icons))
    }
    else setCurrentIcon(selectRandomItem(stage.icons))
  }

  const generateRandomAnswers = () => {
    if(isStageGroup) {
      const randomStage = selectRandomItem(stage.stages)
      const level = randomStage.levels.filter(l => l.chapter === chapter)[0]
      const randomReference = selectRandomItem(level.references)
      setCurrentReference(randomReference)
      setAnswers(shuffleArray([...level.wrongAnswers, randomReference.reading.hiragana]))
    }
    else {
      const level = stage.levels.filter(l => l.chapter === chapter)[0]
      const randomReference = selectRandomItem(level.references)
      setCurrentReference(randomReference)
      setAnswers(shuffleArray([...level.wrongAnswers, randomReference.reading.hiragana]))
    }
  }

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer)
    if(timerRef.current) timerRef.current.pause()

    setTimeout(generateQuestion, 2000)
  }

  const isAnswerCorrect = (answer: string) => {
    if(!currentReference) return false
    return answer === currentReference.reading.hiragana || answer === currentReference.reading.kanji
  }

  const getAnswerClass = (answer: string): string => {
    if(selectedAnswer === null) return ''
    else if(isAnswerCorrect(answer)) return styles.correctAnswer
    else return styles.incorrectAnswer
  }

  const generateQuestion = () => {
    generateRandomIcon()
    generateRandomAnswers()

    // Random styles in answer buttons
    setAnswerStyleList(prev => shuffleArray(prev))

    setSelectedAnswer(null)
    if(timerRef.current) timerRef.current.reset()
  }

  useEffect(() => {
    generateQuestion()
  }, [])

  if(!currentReference || !currentIcon) return null

  return (
    <div className={styles.game}>
      <div className={styles.timer}>
        <Timer
         totalTime={200} 
         decreaseTime={20} 
         onTimeout={() => {}}
         ref={timerRef}
        />
      </div>
      <div className={styles.question}>
        <ul className={styles.iconList}>
          {Array(currentReference.number.actual).fill('').map((_, index) => (
            <li className={styles.item} key={index}>
              <Image src={currentIcon.src} alt={currentIcon.name.english} className={styles.icon} />
            </li>
          ))}
        </ul>
        <ul className={styles.answerList}>
          {answers.map((answer, index) => (
            <li
              key={index}
              className={`${styles.answer} ${answerStyleList[index]} ${getAnswerClass(answer)}`}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}