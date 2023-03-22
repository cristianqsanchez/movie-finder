import Movie from './Movie'

function MovieList ({ movies }) {
  return (
    <ul className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 justify-center place-items-center'>
      {
        movies.map(movie => (
          <Movie key={movie.id} data={movie} />
        ))
      }
    </ul>
  )
}

function NoMoviesResults () {
  return (
    <p className='text-xl'>Examples: Avengers 🦸, Star Wars 🚀, The lord of Rings 🧙...</p>
  )
}

export default function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies ? <MovieList movies={movies} /> : <NoMoviesResults />
  )
}
