import { useLocalStorage } from "@/hooks/useLocalStorage"
import { Options } from "@/types/localStorage"
import { getOptions, setOptions as setLocalStorageOptions } from "@/utils/localStorage"
import { createContext, Dispatch, SetStateAction, useState } from "react"

export interface OptionsContext {
  options: Options,
  setOptions: Dispatch<SetStateAction<Options>>
}

interface OptionsProviderProps {
  children: React.ReactNode
}

const defaultOptions: Options = {
  answerType: 'hiragana',
  howToAnswer: 'multipleChoice'
}

export const OptionsContext = createContext({} as OptionsContext)

export const OptionsProvider = ({ children }: OptionsProviderProps) => {
  const [ options, setOptions ] = useState(useLocalStorage(getOptions) || defaultOptions)
  
  useLocalStorage(() => {
    if(options) setLocalStorageOptions(options)
  })

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      { children }
    </OptionsContext.Provider>
  )
}