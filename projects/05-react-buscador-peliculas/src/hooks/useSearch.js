import { useEffect, useRef, useState } from 'react'

export function useSearch() {
  const [query, updateSearch] = useState('')
  const [error, setError] = useState(null)

  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = query === ''
      return
    }

    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return { query, updateSearch, error }
}
