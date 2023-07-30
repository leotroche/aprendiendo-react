import { omdbResponseAdapter } from '../adapters/omdbResponseAdapter'

const OMDB_API_KEY = '4287ad07'
const OMDB_URL_API = (query) => `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`

export async function getMovies({ query }) {
  if (query === '') return null

  try {
    const response = await fetch(OMDB_URL_API(query))
    const data = await response.json()
    const movies = data.Search
    return omdbResponseAdapter(movies)
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
