import { useContext, useEffect, useRef, useState } from "react"
import { ParsedUrlQuery } from "querystring"
import { GetServerSideProps } from "next"
import Image from "next/image"

import { stages } from "@/data/stages"
import { Icon, LevelReference } from "@/types/stages"
import { selectRandomItem, shuffleArray } from "@/utils/array"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { Timer, TimerRef } from "@/components/Timer"
import { FinishedLevelCard, SingleStageInstructionCard } from "@/components"
import { FinishedLevelCardRef } from "@/components/FinishedLevelCard"
import { StageGroupInstructionCard, StageGroupInstructionCardRef } from "@/components/StageGroupInstructionCard"
import { SingleStageInstructionCardRef } from "@/components/SingleStageInstructionCard"
import { isStageGroup } from "@/utils/stage"
import { setLevelPercentage } from "@/utils/localStorage"

import styles from '../../styles/Game.module.scss'
import { OptionsContext } from "@/contexts/OptionsContext"

interface JapaneseCountersProps {
  query: ParsedUrlQuery
}

const defaultChapter = '1'
const defaultStage = 'mai'
const questionLimit = 10

export default function JapaneseCounters({ query }: JapaneseCountersProps) {
  const { answerType } = useContext(OptionsContext)

  const { level: chapterQuery, stage: stageQuery } = query
  const stage = typeof(stageQuery) === 'string' ? stages[stageQuery] : stages[defaultStage]
  const chapter = typeof(chapterQuery) === 'string' ? chapterQuery : isStageGroup(stage) ? stage.levelChapter : defaultChapter

  const [ currentIcon, setCurrentIcon ] = useState<Icon>()
  const [ currentReference, setCurrentReference ] = useState<LevelReference>()

  const [ answers, setAnswers ] = useState<string[]>([])
  const [ selectedAnswer, setSelectedAnswer ] = useState<string | null>(null);
  const [ answerStyleList, setAnswerStyleList ] = useState([ 
    styles.answerStyle1, 
    styles.answerStyle2, 
    styles.answerStyle3, 
    styles.answerStyle4 
  ])

  const stageInstructionCardRef = useRef<SingleStageInstructionCardRef | StageGroupInstructionCardRef>(null)
  const timerRef = useRef<TimerRef>(null)
  const finishedLevelCardRef = useRef<FinishedLevelCardRef>(null)
  
  const [ questionAsked, setQuestionsAsked ] = useState(0)
  const [ correctAnswers, setCorrectAnswers ] = useState(0)
  const percentageResult = Math.floor((correctAnswers / questionLimit) * 100)
  useLocalStorage(() => setLevelPercentage(chapter, percentageResult))

  if(!stage) return null

  const isAnswerCorrect = (answer: string) => {
    if(!currentReference) return false
    return answer === currentReference.reading.hiragana || answer === currentReference.reading.kanji
  }

  const getAnswerClass = (answer: string): string => {
    if(selectedAnswer === null) return ''
    else if(isAnswerCorrect(answer)) return styles.correctAnswer
    else return styles.incorrectAnswer
  }

  const generateRandomValues = () => {
    if(isStageGroup(stage)) {
      const randomStage = selectRandomItem(stage.stages)
      const randomLevel = selectRandomItem(randomStage.levels)
      const randomReference = selectRandomItem(randomLevel.references)
      // these references will be used to fill in the missing answers
      const fillingReferences = shuffleArray(randomLevel.references.filter(r => r !== randomReference))

      // if the reference has specific icons, choose randomly among them
      if(randomReference.specificIcons && randomReference.specificIcons.length > 0) {
        setCurrentIcon(selectRandomItem(randomReference.specificIcons))
      } else {
        setCurrentIcon(selectRandomItem(randomStage.icons))
      }

      // creating answers
      const unshuffledAnswers = [
        ...randomReference.wrongAnswers.slice(0, 3), 
        randomReference.reading.hiragana
      ]

      if(unshuffledAnswers.length < 4) {
        fillingReferences.forEach(r => {
          // fill up to 4
          unshuffledAnswers.push(...r.wrongAnswers.slice(0, 4 - unshuffledAnswers.length))
        })
      }

      // fill up to 4
      fillingReferences.slice(0, 4 - unshuffledAnswers.length).forEach(r => {
        unshuffledAnswers.push(r.reading.hiragana)
      })
      
      setCurrentReference(randomReference)
      setAnswers(shuffleArray(unshuffledAnswers))
    }
    else {
      const level = stage.levels.filter(l => l.chapter === chapter)[0]
      const randomReference = selectRandomItem(level.references)
      // these references will be used to fill in the missing answers
      const fillingReferences = shuffleArray(level.references.filter(r => r !== randomReference))

      // if the reference has specific icons, choose randomly among them
      if(randomReference.specificIcons && randomReference.specificIcons.length > 0) {
        setCurrentIcon(selectRandomItem(randomReference.specificIcons))
      } else {
        setCurrentIcon(selectRandomItem(stage.icons))
      }

      // creating answers
      const unshuffledAnswers = [
        ...randomReference.wrongAnswers.slice(0, 3), 
        randomReference.reading.hiragana
      ]

      
      if(unshuffledAnswers.length < 4) {
        fillingReferences.forEach(r => {
          // fill up to 4
          unshuffledAnswers.push(...r.wrongAnswers.slice(0, 4 - unshuffledAnswers.length))
        })
      }

      // fill up to 4
      fillingReferences.slice(0, 4 - unshuffledAnswers.length).forEach(r => {
        unshuffledAnswers.push(r.reading.hiragana)
      })

      setCurrentReference(randomReference)
      setAnswers(shuffleArray(unshuffledAnswers))
    }
  }

  const generateQuestion = () => {
    if(questionAsked >= questionLimit) {
      return finishLevel()
    }

    generateRandomValues()

    // Random styles in answer buttons
    setAnswerStyleList(prev => shuffleArray(prev))

    setSelectedAnswer(null)
    timerRef.current?.reset()
    setQuestionsAsked(prev => prev + 1)
  }

  const onTimeout = () => {
    setSelectedAnswer('!')
    setTimeout(generateQuestion, 2000)
  }
 
  const handleAnswerClick = (answer: string) => {
    // block user from clicking multiple times
    if(selectedAnswer) return

    setSelectedAnswer(answer)
    
    if(isAnswerCorrect(answer)) setCorrectAnswers(prev => prev + 1)

    if(timerRef.current) timerRef.current.pause()

    setTimeout(generateQuestion, 2000)
  }

  const finishLevel = () => {
    finishedLevelCardRef.current?.show()
  }

  const onStart = () => {
    stageInstructionCardRef.current!.close()
    generateQuestion()
    timerRef.current?.start()
  }

  useEffect(() => {
    // reset
    setCurrentIcon(undefined)
    setCurrentReference(undefined)
    setSelectedAnswer(null)
    setAnswers([])
    setQuestionsAsked(0)
    setCorrectAnswers(0)
    finishedLevelCardRef.current?.close()
    stageInstructionCardRef.current?.show()
  }, [ query ])

  return (
    <div className={styles.game}>
      <h1>{answerType}</h1>
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
          {Array(currentReference?.number.icons).fill('').map((_, index) => (
            <li className={styles.item} key={index}>
              {currentIcon &&   
              <Image src={currentIcon.src} alt={currentIcon.name.english} className={styles.icon} />}
            </li>
          ))}
        </ul>
        <ul className={styles.answerList}>
          {answers.map((answer, index) => (
            <li key={index} className={styles.answerBox}>
              <button
               className={`${styles.answerBtn} ${answerStyleList[index]} ${getAnswerClass(answer)}`}
               onClick={() => handleAnswerClick(answer)}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <FinishedLevelCard
       percentageResult={percentageResult}
       stage={stage}
       chapter={chapter}
       ref={finishedLevelCardRef}
      />
      {isStageGroup(stage) ? 
      <StageGroupInstructionCard
       stage={stage} 
       onStart={onStart}
       ref={stageInstructionCardRef} 
      /> 
      : <SingleStageInstructionCard
       ref={stageInstructionCardRef} 
       stage={stage} 
       chapter={chapter} 
       onStart={onStart}
      />}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return { 
    props: {
      query
    }
  }
}