import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const itemFromStorage = window.localStorage.getItem(key)
      return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const saveStoredValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  const clearStoredValue = () => {
    saveStoredValue(initialValue)
    window.localStorage.clearStoredValue(key)
  }

  return [storedValue, saveStoredValue, clearStoredValue]
}
