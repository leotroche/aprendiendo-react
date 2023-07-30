export function omdbResponseAdapter(movies) {
  return movies?.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }
  })
}
