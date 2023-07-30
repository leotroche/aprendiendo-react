import { useCallback, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { debounce } from './utils/utils'
import './App.css'

export function App() {
  const [sort, setSort] = useState(false)
  const { query, updateSearch, error } = useSearch()
  const { movies, searchMovies, isLoading } = useMovies({ query, sort })

  const debouncedGetMovies = useCallback(
    debounce((newQuery) => searchMovies({ query: newQuery }), 300),
    [],
  )

  const handleChange = (event) => {
    const newQuery = event.target.value
    updateSearch(newQuery)
    debouncedGetMovies(query)
  }

  debounce(() => {
    console.log('searhc')
  }, 1000)

  const handleSubmit = (event) => {
    event.preventDefault()
    searchMovies({ query })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Prueba Técnica</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : '' }}
            type='text'
            placeholder='Avengers, Man of Steel...'
            onChange={handleChange}
          />
          <button>Buscar</button>
        </form>
        <div className='sort'>
          <label htmlFor='sort'>Sort movies</label>
          <input type='checkbox' id='sort' checked={sort} onChange={handleSort} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>{isLoading ? <p>Loading... ⭕</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
