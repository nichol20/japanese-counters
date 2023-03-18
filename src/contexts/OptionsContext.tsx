import { useLocalStorage } from "@/hooks/useLocalStorage"
import { Options } from "@/types/localStorage"
import { getOptions, setOptions as setLocalStorageOptions } from "@/utils/localStorage"
import { createContext, useEffect, useState } from "react"

type SetPref = <T extends keyof Options>(option: T, value: Options[T]) => void

export interface OptionsContext {
  options: Options,
  setPref: SetPref
}

interface OptionsProviderProps {
  children: React.ReactNode
}

const defaultOptions: Options = {
  answerType: 'hiragana',
  howToAnswer: 'multipleChoice',
  gameSpeed: 'normal'
}

export const OptionsContext = createContext({} as OptionsContext)

export const OptionsProvider = ({ children }: OptionsProviderProps) => {
  const [ options, setOptions ] = useState(defaultOptions)
  const localStorageOptions = useLocalStorage(getOptions) || defaultOptions

  const setPref: SetPref = (option, value) => {
    setOptions(prev => {
      const newOptions = {
        ...prev,
        [option]: value
      }
      setLocalStorageOptions(newOptions) 
      return newOptions
    })
  }

  useEffect(() => {
    setOptions(localStorageOptions)
  }, [ localStorageOptions ])

  return (
    <OptionsContext.Provider value={{ options, setPref }}>
      { children }
    </OptionsContext.Provider>
  )
}