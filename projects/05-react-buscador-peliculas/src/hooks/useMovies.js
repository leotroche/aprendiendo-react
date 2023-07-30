import { useMemo, useRef, useState, useCallback } from 'react'
import { getMovies } from '../services/getMovies'

export function useMovies({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(query)

  const searchMovies = useCallback(async ({ query }) => {
    if (previousSearch.current === query) return

    setIsLoading(true)
    try {
      const newMovies = await getMovies({ query })
      previousSearch.current = query
      setMovies(newMovies)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].toSorted((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sort, movies])

  return { movies: sortedMovies, searchMovies, isLoading, error }
}
