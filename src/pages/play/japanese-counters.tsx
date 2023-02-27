import { useRouter } from "next/router"
import { stages } from "@/data/stages"
import { useEffect, useState } from "react"
import { Icon, Level, LevelReference } from "@/types/stages"
import { selectRandomItem, shuffleArray } from "@/utils/functions"

import styles from '../../styles/Game.module.scss'
import Image from "next/image"

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
  
  if(!stage) return null

  const generateRandomIcon = () => {
    if(isStageGroup) {
      const randomStage = selectRandomItem(stage.stages)
      setCurrentIcon(selectRandomItem(randomStage.icons))
    }
    else setCurrentIcon(selectRandomItem(stage.icons))
  }

  const generateRandomReferenceAndAnswers = () => {
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
    setSelectedAnswer(answer);
  }

  const isAnswerCorrect = (answer: string) => {
    if(!currentReference) return false
    return answer === currentReference.reading.hiragana || answer === currentReference.reading.kanji
  }

  const getAnswerClass = (answer: string): string => {
    if(selectedAnswer === null) return styles.answer
    else if(isAnswerCorrect(answer)) return styles.correctAnswer
    else return styles.incorrectAnswer
  }


  useEffect(() => {
    generateRandomIcon()
    generateRandomReferenceAndAnswers()
  }, [])

  if(!currentReference || !currentIcon) return null

  return (
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
            className={getAnswerClass(answer)}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  )
}