export function ListOfMovies({ movies }) {
  return (
    <ul className='movies'>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className='movie'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={`Poster for ${movie.title}`} />
          </li>
        )
      })}
    </ul>
  )
}

export function NoMoviesResults() {
  return <p>No se encontraron peliculas para esta búsqueda</p>
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}
