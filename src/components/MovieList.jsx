import Movie from './Movie'

export default function MovieList ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <Movie key={movie.id} data={movie} />
        ))
      }
    </ul>
  )
}
