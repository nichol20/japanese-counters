import { useEffect, useState } from "react"

export const useLocalStorage = <T>(fn: () => T): T | undefined => {
  const [ result, setResult ] = useState<T>()

  useEffect(() => {
    setResult(fn())
  }, [ fn ])

  return result
}