import { useContext, useEffect, useRef, useState } from "react"
import { ParsedUrlQuery } from "querystring"
import { GetServerSideProps } from "next"
import Image from "next/image"

import { stages } from "@/data/stages"
import { Icon, LevelReference, Stage, StageGroup } from "@/types/stages"
import { selectRandomItem, shuffleArray } from "@/utils/array"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { Timer, TimerRef } from "@/components/Timer"
import { FinishedLevelCard, SingleStageInstructionCard } from "@/components"
import { FinishedLevelCardRef } from "@/components/FinishedLevelCard"
import { StageGroupInstructionCard, StageGroupInstructionCardRef } from "@/components/StageGroupInstructionCard"
import { SingleStageInstructionCardRef } from "@/components/SingleStageInstructionCard"
import { isStageGroup, getStage, getChapter, getStageIds } from "@/utils/stage"
import { setLevelPercentage } from "@/utils/localStorage"

import styles from '../../styles/Game.module.scss'
import { OptionsContext } from "@/contexts/OptionsContext"
import { isString } from "@/utils/string"

interface JapaneseCountersProps {
  query: ParsedUrlQuery
}

const defaultChapter = '1'
const defaultStage = 'mai'
const questionLimit = 10
const normalTime = 200



export default function JapaneseCounters({ query }: JapaneseCountersProps) {
  const { options } = useContext(OptionsContext)

  const { level: chapterQuery, stage: stageQuery, stageIds: stageIdsQuery } = query
  
  const stageIds =  isString(stageIdsQuery) ? getStageIds(stageIdsQuery) : undefined
  const stage = isString(stageQuery) ? getStage(stageQuery, stageIds) : stages[defaultStage]
  if(!stage) return null

  const chapter = isString(chapterQuery) ? getChapter(stage, chapterQuery) : defaultChapter

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
  
  const [ questionsAsked, setQuestionsAsked ] = useState(0)
  const [ correctAnswers, setCorrectAnswers ] = useState(0)
  const percentageResult = Math.floor((correctAnswers / questionLimit) * 100)
  useLocalStorage(() => setLevelPercentage(chapter, percentageResult))

  const isAnswerCorrect = (answer: string) => {
    if(!currentReference) return false
    return answer === currentReference.reading.hiragana || answer === currentReference.reading.kanji
  }

  const getAnswerBtnsClass = (answer: string): string => {
    if(selectedAnswer === null) return ''
    else if(isAnswerCorrect(answer)) return styles.correctAnswer
    else return styles.incorrectAnswer
  }

  const getAnswerInputClass = () => {
    if(selectedAnswer === null) return ''
    else if(isAnswerCorrect(selectedAnswer)) return styles.correctAnswer
    else return styles.incorrectAnswer
  }

  const getTotalTime = () => {
    if(options.gameSpeed === 'fast') return normalTime * 0.7
    else if(options.gameSpeed === 'normal') return normalTime
    else if(options.gameSpeed === 'relaxed') return normalTime * 1.5
    else return 0
  }

  const generateRandomValues = () => {
    if(isStageGroup(stage)) {
      const randomStage = selectRandomItem(stage.stages)
      const randomLevel = selectRandomItem(randomStage.levels)
      const randomReference = selectRandomItem(randomLevel.references)
      // these references will be used to fill in the missing answers
      const fillingReferences = shuffleArray(randomLevel.references.filter(r => r !== randomReference))

      // if the reference has specific icons, choose randomly among them
      setCurrentIcon(() => {
        if(randomReference.specificIcons.length > 0) {
          return selectRandomItem(randomReference.specificIcons)
        }
        return selectRandomItem(randomStage.icons)
      })

      // creating answers
      let unshuffledAnswers: string[]

      if(options.answerType === 'hiragana') {
        unshuffledAnswers = [
          ...randomReference.wrongAnswers.slice(0, 3), 
          randomReference.reading.hiragana
        ]

        if(unshuffledAnswers.length < 4) {
          // fill up to 4 with wrong answers from other levels
          fillingReferences.forEach(r => {
            unshuffledAnswers.push(...r.wrongAnswers.slice(0, 4 - unshuffledAnswers.length))
          })
        }
  
        // if not enough, fill up to 4 with readings from other levels
        fillingReferences.slice(0, 4 - unshuffledAnswers.length).forEach(r => {
          unshuffledAnswers.push(r.reading.hiragana)
        })
      } else {
        unshuffledAnswers = [randomReference.reading.kanji]
        // fill up to 4 with readings from other levels
        fillingReferences.slice(0, 4 - unshuffledAnswers.length).forEach(r => {
          unshuffledAnswers.push(r.reading.kanji)
        })
      }
      
      setCurrentReference(randomReference)
      setAnswers(shuffleArray(unshuffledAnswers))
    }
    else {
      const level = stage.levels.filter(l => l.chapter === chapter)[0]
      const randomReference = selectRandomItem(level.references)
      // these references will be used to fill in the missing answers
      const fillingReferences = shuffleArray(level.references.filter(r => r !== randomReference))

      // if the reference has specific icons, choose randomly among them
      setCurrentIcon(() => {
        if(randomReference.specificIcons.length > 0) {
          return selectRandomItem(randomReference.specificIcons)
        }
        return selectRandomItem(stage.icons)
      })

      // creating answers
      let unshuffledAnswers: string[]

      if(options.answerType === 'hiragana') {
        unshuffledAnswers = [
          ...randomReference.wrongAnswers.slice(0, 3), 
          randomReference.reading.hiragana
        ]
        
        if(unshuffledAnswers.length < 4) {
          // fill up to 4 with wrong answers from other levels
          fillingReferences.forEach(r => {
            unshuffledAnswers.push(...r.wrongAnswers.slice(0, 4 - unshuffledAnswers.length))
          })
        }
  
        // if not enough, fill up to 4 with readings from other levels
        fillingReferences.slice(0, 4 - unshuffledAnswers.length).forEach(r => {
          unshuffledAnswers.push(r.reading.hiragana)
        })
      } else {
        unshuffledAnswers = [randomReference.reading.kanji]
        
        // fill up to 4 with readings from other levels
        fillingReferences.slice(0, 4 - unshuffledAnswers.length).forEach(r => {
          unshuffledAnswers.push(r.reading.kanji)
        })
      }

      setCurrentReference(randomReference)
      setAnswers(shuffleArray(unshuffledAnswers))
    }
  }

  const generateQuestion = () => {
    if(questionsAsked >= questionLimit) {
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
 
  const handleAnswerSelection = (answer: string, input?: HTMLInputElement) => {
    // block user from clicking multiple times
    if(selectedAnswer) return

    setSelectedAnswer(answer)
    
    if(isAnswerCorrect(answer)) setCorrectAnswers(prev => prev + 1)

    if(timerRef.current) timerRef.current.pause()

    setTimeout(() => {
      generateQuestion()
      // reset answer input element
      if(input) input.value = ''
    }, 2000)
  }

  const handleAnswerInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter") {
      const input = event.target as HTMLInputElement
      handleAnswerSelection(input.value, input)
    }
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
      <div className={styles.timer}>
        {options.gameSpeed !== 'peaceful' && 
        <Timer
         totalTime={getTotalTime()} 
         decreaseTime={20} 
         onTimeout={() => {}}
         ref={timerRef}
        />}
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
        {options.howToAnswer === 'multipleChoice' && <ul className={styles.answerList}>
          {answers.map((answer, index) => (
            <li key={index} className={styles.answerBox}>
              <button
               className={`${styles.answerBtn} ${answerStyleList[index]} ${getAnswerBtnsClass(answer)}`}
               onClick={() => handleAnswerSelection(answer)}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>}
        {options.howToAnswer === 'fillInTheBlank' && 
        <input
         type="text" 
         className={`${styles.answerInput} ${getAnswerInputClass()}`} 
         onKeyUp={handleAnswerInputKeyUp} 
        />}
      </div>
      <FinishedLevelCard
       percentageResult={percentageResult}
       stage={stage}
       chapter={chapter}
       ref={finishedLevelCardRef}
      />
      {isStageGroup(stage) ? 
      <StageGroupInstructionCard
       stages={stage.stages} 
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