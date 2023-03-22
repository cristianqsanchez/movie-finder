import Movie from './Movie'

export default function MovieList ({ movies }) {
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
