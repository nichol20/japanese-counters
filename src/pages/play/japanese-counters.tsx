import { useContext, useEffect, useRef, useState } from "react"
import { ParsedUrlQuery } from "querystring"
import { GetServerSideProps } from "next"
import Image from "next/image"

import { stages } from "@/data/stages"
import { Icon, LevelReference, Stage, StageGroup } from "@/types/stages"
import { selectRandomItem, shuffleArray } from "@/utils/array"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { Timer, TimerRef } from "@/components/Timer"
import { FinishingCard, SingleStageInstructionCard } from "@/components"
import { FinishingCardRef } from "@/components/FinishingCard"
import { StageGroupInstructionCard, StageGroupInstructionCardRef } from "@/components/StageGroupInstructionCard"
import { SingleStageInstructionCardRef } from "@/components/SingleStageInstructionCard"
import { isStageGroup, getStage, getChapter, getStageIds, getReading } from "@/utils/stage"
import { getBestScore, setBestScore, setLevelPercentage } from "@/utils/localStorage"

import styles from '../../styles/Game.module.scss'
import { OptionsContext } from "@/contexts/OptionsContext"
import { isString } from "@/utils/string"

interface JapaneseCountersProps {
  query: ParsedUrlQuery
}

const defaultStage = 0
const questionLimit = 20
const normalTime = 200

export default function JapaneseCounters({ query }: JapaneseCountersProps) {
  const { options } = useContext(OptionsContext)

  const { level: chapterQuery, stage: stageQuery, stageIds: stageIdsQuery } = query
  
  const stageIds =  isString(stageIdsQuery) ? getStageIds(stageIdsQuery) : undefined
  const stage = isString(stageQuery) ? getStage(stageQuery, stageIds) : stages[defaultStage]
  if(!stage) return null

  const chapter = getChapter(stage, chapterQuery)
  const isEndlessMode = stage.id === 'endlessMode'

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
  const FinishingCardRef = useRef<FinishingCardRef>(null)
  
  const [ questionsAsked, setQuestionsAsked ] = useState(0)
  const [ correctAnswers, setCorrectAnswers ] = useState(0)
  const [ endlessModeScore, setEndlessModeScore ] = useState(0)
  const percentageResult = Math.floor((correctAnswers / questionLimit) * 100)
  useLocalStorage(() => {
    setLevelPercentage(chapter, percentageResult)
    setBestScore(endlessModeScore)
  })
  const bestScore = useLocalStorage(getBestScore)
  const finishingCardTitle = isEndlessMode ? `Score ${endlessModeScore}` : `Your rating`

  const getFinishingCardMessage = () => {
    if(!isEndlessMode) return ''

    if(bestScore && bestScore > endlessModeScore) return `Best score: ${bestScore}`
    else return `New best score: ${endlessModeScore}`
  }

  const isAnswerCorrect = (answer: string): boolean => {
    if(!currentReference) return false

    if(Array.isArray(currentReference.reading)) {
      return currentReference.reading.filter(r => r.hiragana === answer || r.kanji === answer).length > 0
    }
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
    let finalTime = normalTime

    if(options.gameSpeed === 'fast') finalTime *= 0.7
    else if(options.gameSpeed === 'normal') finalTime *= 1
    else if(options.gameSpeed === 'relaxed') finalTime *= 1.5
    else finalTime *= 0

    if(options.howToAnswer === 'fillInTheBlank') finalTime *= 1.3

    return Math.floor(finalTime)
  }

  const getAnswers = (randomReference: LevelReference, fillingReferences: LevelReference[]) => {
    // creating answers
    let unshuffledAnswers: string[]

    if(options.answerType === 'kanji' && (isEndlessMode || isStageGroup(stage))) {
      unshuffledAnswers = [getReading(randomReference.reading).kanji]

      ;(stage as StageGroup).stages.forEach(s => {
        // get the last level of each stage inside stage.stages and loop through the references
        s.levels[s.levels.length - 1].references.forEach(r => {
          // get the kanjis with the same number as the randomReference
          if(r.number.actual === randomReference.number.actual && unshuffledAnswers.length < 4 
            && getReading(r.reading).kanji !== getReading(randomReference.reading).kanji) {
            unshuffledAnswers.push(getReading(r.reading).kanji)
          }
        })
      })

      // if length is 1, choose random kanji from the stage that has the randomReference
      if(unshuffledAnswers.length === 1) {
        ;(stage as StageGroup).stages.forEach(s => {
          const lastLevel = s.levels[s.levels.length - 1] // last level has all references
          if(lastLevel.references.includes(randomReference)) {
            shuffleArray(lastLevel.references).slice(0, 3).forEach(r => {
              unshuffledAnswers.push(getReading(r.reading).kanji)
            })
          }
        })
      }

    } else {
      unshuffledAnswers = [
        ...randomReference.wrongAnswers.slice(0, 3), 
        getReading(randomReference.reading).hiragana
      ]

      if(unshuffledAnswers.length < 4) {
        // fill up to 4 with wrong answers from other levels
        fillingReferences.forEach(r => {
          unshuffledAnswers.push(...r.wrongAnswers.slice(0, 4 - unshuffledAnswers.length))
        })
      }

      // if not enough, fill up to 4 with readings from other levels
      fillingReferences.slice(0, 4 - unshuffledAnswers.length).forEach(r => {
        unshuffledAnswers.push(getReading(r.reading).hiragana)
      })
    } 
    return unshuffledAnswers
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
      const unshuffledAnswers = getAnswers(randomReference, fillingReferences)
      
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
      const unshuffledAnswers = getAnswers(randomReference, fillingReferences)

      setCurrentReference(randomReference)
      setAnswers(shuffleArray(unshuffledAnswers))
    }
  }

  const generateQuestion = () => {
    if(questionsAsked >= questionLimit && !isEndlessMode) {
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
    setTimeout(() => {
      if(isEndlessMode) return finishLevel()
      generateQuestion()
    }, 2000)
  }
 
  const handleAnswerSelection = (answer: string, input?: HTMLInputElement) => {
    // block player from selecting multiple times
    if(selectedAnswer) return

    setSelectedAnswer(answer)
    
    if(isAnswerCorrect(answer)) {
      setCorrectAnswers(prev => prev + 1)

      if(isEndlessMode && timerRef.current !== null) {
        setEndlessModeScore(prev => prev + timerRef.current!.getTimeLeft())
      }
    }

    timerRef.current?.pause()

    setTimeout(() => {
      if(isEndlessMode && !isAnswerCorrect(answer)) return finishLevel()
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
    FinishingCardRef.current?.show()
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
    FinishingCardRef.current?.close()
    stageInstructionCardRef.current?.show()
  }, [ query ])

  return (
    <div className={styles.game}>
      {isEndlessMode && <div className={styles.endlessModeScore}>Score: {endlessModeScore}</div>}
      
      <div className={styles.timer}>
        {options.gameSpeed !== 'peaceful' && 
        <Timer
         totalTime={getTotalTime()} 
         decreaseTime={20} 
         onTimeout={onTimeout}
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
          <div className={styles.answerInputBox}>
            <input
              type="text" 
              className={`${styles.answerInput} ${getAnswerInputClass()}`} 
              onKeyUp={handleAnswerInputKeyUp} 
            />
            <span className={styles.answerInputDescription}>Press enter to submit</span>
          </div>}
      </div>

      <FinishingCard
       percentageResult={percentageResult}
       stage={stage}
       chapter={chapter}
       isEndlessMode={isEndlessMode}
       title={finishingCardTitle}
       message={getFinishingCardMessage()}
       ref={FinishingCardRef}
      />
      {isStageGroup(stage) ? 
      <StageGroupInstructionCard
       stage={stage} 
       isEndlessMode={isEndlessMode}
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